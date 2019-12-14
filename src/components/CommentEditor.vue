<template>
  <transition name="modal-fade">
    <div
      autofocus
      class="comment-modal"
      @click.self="close"
      @keydown.esc.once="close"
    >
      <div class="comment-modal-container">
        <div class="comment-poster-editor-emoji">
          <VEmojiPicker
            :pack="pack"
            @select="selectEmoji"
            v-show="emojiDialogVisible"
            labelSearch="搜索表情"
          />
        </div>
        <div class="comment-poster-container active">
          <ul class="comment-poster-controls">
            <li class="poster-item-close">
              <span
                class="editor-btn-close"
                @click="exit"
              >&times;</span>
            </li>
          </ul>
          <div class="comment-poster-main">
            <div class="comment-poster-main-body">
              <img
                v-if="options.comment_gravatar_default"
                class="comment-poster-body-avatar"
                :src="avatar"
                :alt="comment.author"
              >
              <div class="comment-poster-body-content">
                <ul class="comment-poster-body-header">
                  <li class="header-item-nickname">
                    <input
                      type="text"
                      v-model="comment.author"
                      @input="handleAuthorInput"
                      placeholder="昵称 *"
                    >
                    <span></span>
                  </li>
                  <li class="header-item-email">
                    <input
                      type="email"
                      v-model="comment.email"
                      placeholder="邮箱 *"
                    >
                    <span></span>
                  </li>
                  <li class="header-item-website">
                    <input
                      type="text"
                      v-model="comment.authorUrl"
                      placeholder="网站"
                    >
                    <span></span>
                  </li>
                </ul>
                <span
                  class="comment-poster-body-reply"
                  v-if="replyingComment"
                >回复：@{{replyingComment.author}} <small>#{{replyingComment.id}}</small></span>
                <div class="comment-poster-body-editor">
                  <div class="comment-poster-editor-wrapper">
                    <textarea
                      placeholder="撰写评论...（1000 个字符内）"
                      :style="replyingComment==null?'height: 146px;':'height: 128px;'"
                      v-model="comment.content"
                      @input="handleContentInput"
                      @focus="()=>this.emojiDialogVisible=false"
                    ></textarea>
                  </div>
                  <ul class="comment-poster-editor-controls">
                    <li class="editor-item-reply">
                      <button
                        class="editor-btn-reply"
                        type="button"
                        @click="handleSubmitClick"
                        :disabled="!commentValid"
                      >评论</button>
                    </li>
                    <li class="editor-item-preview">
                      <button
                        class="editor-btn-preview"
                        type="button"
                        @click="handlePreviewClick"
                      >预览</button>
                    </li>
                    <li class="editor-item-emoji">
                      <button
                        class="editor-btn-emoji"
                        type="button"
                        @click="toogleDialogEmoji"
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
import { isEmpty } from '../utils/util'
import commentApi from '../apis/comment'

export default {
  name: 'CommentEditor',
  components: {
    VEmojiPicker
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
      pack: emojiData,
      emojiDialogVisible: false,
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
      if (!this.comment.email||!this.validEmail(this.comment.email)) {
        return '//cdn.v2ex.com/gravatar?d=' + this.options.comment_gravatar_default
      }
      const gravatarMd5 = md5(this.comment.email)
      return `//cdn.v2ex.com/gravatar/${gravatarMd5}?s=256&d=` + this.options.comment_gravatar_default
    },
    commentValid() {
      return !isEmpty(this.comment.author) && !isEmpty(this.comment.email) && !isEmpty(this.comment.content)
    }
  },
  created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author')
    this.comment.authorUrl = localStorage.getItem('comment-authorUrl')
    this.comment.email = localStorage.getItem('comment-email')
  },
  methods: {
    toogleDialogEmoji() {
      this.emojiDialogVisible = !this.emojiDialogVisible
    },
    selectEmoji(emoji) {
      this.comment.content += emoji.emoji
      this.toogleDialogEmoji()
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
      // Submit the comment
      this.comment.postId = this.targetId
      if (this.replyingComment) {
        // Set parent id if available
        this.comment.parentId = this.replyingComment.id
      }
      commentApi
        .createComment(this.target, this.comment)
        .then(response => {
          // Store comment author, email, authorUrl
          localStorage.setItem('comment-author', this.comment.author)
          localStorage.setItem('comment-email', this.comment.email)
          localStorage.setItem('comment-authorUrl', this.comment.authorUrl)

          // clearn comment
          this.comment.content = null

          // Emit a created event
          this.$emit('created', response.data.data)
          this.$emit('close', false)
        })
        .catch(error => {
          this.$emit('failed', error.response)
        })
    },
    handlePreviewClick() {
      window.location.href = '#comment-author'
    },
    validEmail(email) {
      var re = /^[A-Za-z1-9]+([-_.][A-Za-z1-9]+)*@([A-Za-z1-9]+[-.])+[A-Za-z]{2,8}$/
      return re.test(email);
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
