<template>
  <transition name="modal-fade">
    <div autofocus class="comment-modal" @click.self="close" @keydown.esc.once="close">
      <div class="comment-modal-container">
        <div class="comment-poster-editor-emoji">
          <VEmojiPicker
            v-show="emojiPicker.visible"
            :pack="emojiPicker.pack"
            labelSearch="搜索表情"
            @select="handleSelectEmoji"
          />
        </div>
        <div class="comment-poster-container active">
          <ul class="comment-poster-controls">
            <li class="poster-item-close">
              <span class="editor-btn-close" @click="exit">&times;</span>
            </li>
          </ul>
          <div class="comment-poster-main">
            <div class="comment-poster-main-body">
              <img
                v-if="options.comment_gravatar_default"
                :alt="comment.author"
                :src="avatar"
                class="comment-poster-body-avatar"
              />
              <div class="comment-poster-body-content">
                <ul class="comment-poster-body-header">
                  <li class="header-item-nickname">
                    <input
                      ref="authorInput"
                      v-model="comment.author"
                      placeholder="昵称 *"
                      type="text"
                      @input="handleAuthorInput"
                    />
                    <span></span>
                  </li>

                  <li class="header-item-email">
                    <CommentInput
                      v-model="comment.email"
                      :placeholder="'邮箱 *'"
                      :suffixFlag="'@'"
                      :suggestionList="[
                        { id: 1, suffix: '@qq.com' },
                        { id: 2, suffix: '@163.com' },
                        { id: 3, suffix: '@foxmail.com' },
                        { id: 4, suffix: '@gmail.com' }
                      ]"
                      :type="'email'"
                    />
                  </li>

                  <li class="header-item-website">
                    <CommentInput
                      v-model="comment.authorUrl"
                      :placeholder="'网站'"
                      :prefixFlag="':/'"
                      :suggestionList="[
                        { id: 1, prefix: 'http://' },
                        { id: 2, prefix: 'https://' }
                      ]"
                    />
                  </li>
                </ul>
                <span v-if="replyingComment" class="comment-poster-body-reply">
                  回复：@{{ replyingComment.author }} <small>#{{ replyingComment.id }}</small>
                </span>
                <div class="comment-poster-body-editor">
                  <div class="comment-poster-editor-wrapper">
                    <textarea
                      ref="contentInput"
                      v-model="comment.content"
                      :style="replyingComment == null ? 'height: 146px;' : 'height: 128px;'"
                      placeholder="撰写评论...（1000 个字符内）"
                      @focus="() => (this.emojiPicker.visible = false)"
                      @input="handleContentInput"
                    ></textarea>
                  </div>
                  <ul class="comment-poster-editor-controls">
                    <li class="editor-item-reply mobile-show">
                      <button
                        :disabled="!commentValid"
                        class="editor-btn-reply"
                        type="button"
                        @click="handleSubmitClick"
                      >
                        评论
                      </button>
                    </li>
                    <li class="editor-item-emoji">
                      <button
                        class="editor-btn-emoji"
                        type="button"
                        @click="emojiPicker.visible = !emojiPicker.visible"
                      >
                        表情
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import md5 from 'md5'
import VEmojiPicker from './EmojiPicker/VEmojiPicker'
import emojiData from './EmojiPicker/data/emojis.js'
import { isEmail, isEmpty } from '../utils/util'
import apiClient from '../plugins/api-client'
import CommentInput from './CommentInput'

export default {
  name: 'CommentEditor',
  components: {
    VEmojiPicker,
    CommentInput
  },
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function(value) {
        // The value must match one of these strings
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1
      }
    },
    replyingComment: {
      type: Object,
      required: false,
      default: null
    },
    options: {
      required: false,
      default: []
    }
  },
  data() {
    return {
      emojiPicker: {
        visible: false,
        pack: emojiData
      },
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ''
      }
    }
  },
  computed: {
    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/'

      if (!this.comment.email || !isEmail(this.comment.email)) {
        return `${gravatarSource}?s=256&d=${gravatarDefault}`
      }

      const gravatarMd5 = md5(this.comment.email)
      return `${gravatarSource}${gravatarMd5}?s=256&d=${gravatarDefault}`
    },
    commentValid() {
      return !isEmpty(this.comment.author) && !isEmpty(this.comment.email) && !isEmpty(this.comment.content)
    }
  },
  created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author')
    this.comment.authorUrl = localStorage.getItem('comment-author-url')
    this.comment.email = localStorage.getItem('comment-email')

    if (!this.comment.author) {
      this.$nextTick(() => {
        this.$refs.authorInput.focus()
      })
      return
    }
    if (!this.comment.content) {
      this.$nextTick(() => {
        this.$refs.contentInput.focus()
      })
    }
  },
  methods: {
    /**
     * Select emoji.
     *
     * @param emoji emoji
     */
    handleSelectEmoji(emoji) {
      this.comment.content += emoji.emoji
      this.emojiPicker.visible = false
      this.$nextTick(() => {
        this.$refs.contentInput.focus()
      })
    },
    close() {
      this.$emit('close', false)
    },
    exit() {
      if (this.comment.content && !window.confirm('评论还未发布，是否放弃？')) {
        return
      }
      this.$emit('exit', false)
    },
    handleAuthorInput() {
      this.input()
    },
    handleContentInput() {
      this.input()
    },
    input() {
      this.$emit('input', this.comment)
    },
    handleSubmitClick() {
      // Store comment author, email, authorUrl
      if (this.comment.author) {
        localStorage.setItem('comment-author', this.comment.author)
      }
      if (this.comment.email) {
        localStorage.setItem('comment-email', this.comment.email)
      }
      if (this.comment.authorUrl) {
        localStorage.setItem('comment-author-url', this.comment.authorUrl)
      }

      // Submit the comment
      this.comment.postId = this.targetId

      if (this.replyingComment) {
        // Set parent id if available
        this.comment.parentId = this.replyingComment.id
      }
      apiClient.comment
        .create(this.target, this.comment)
        .then(response => {
          // clear comment
          this.comment.content = null

          // Emit a created event
          this.$emit('created', response.data)
          this.$emit('close', false)
        })
        .catch(error => {
          this.$emit('failed', error)
        })
    }
  }
}
</script>

<style lang="scss">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>