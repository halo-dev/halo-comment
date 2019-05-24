<template>
  <transition name="modal-fade">
    <div
      autofocus
      class="comment-modal"
      @click.self="close"
      @keydown.esc.once="close"
    >
      <div class="comment-modal-container">
        <div class="comment-poster-container active">
          <ul class="comment-poster-controls">
            <li class="poster-item-close">
              <span
                class="closebtn"
                @click="close"
              >&times;</span>
            </li>
          </ul>
          <div class="comment-poster-main">
            <div class="comment-poster-main-body">
              <img
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
                <div class="comment-poster-body-editor">
                  <div class="comment-poster-editor-wrapper">
                    <textarea
                      placeholder="撰写评论...（1000 个字符内）"
                      style="height: 132px;"
                      v-model="comment.content"
                      @input="handleContentInput"
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
                      <a
                        class="editor-btn-preview"
                        href="#comment-author"
                      >预览</a>
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
import { isEmpty } from '../utils/util'
import commentApi from '../apis/comment'

export default {
  name: 'CommentEditor',
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
    }
  },
  data() {
    return {
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: null
      }
    }
  },
  computed: {
    avatar() {
      if (!this.comment.email) {
        return 'https://gravatar.loli.net/avatar?d=mp'
      }
      const gavatarMd5 = md5(this.comment.email)
      return `//gravatar.loli.net/avatar/${gavatarMd5}/?s=256&d=mp`
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
    close() {
      this.$emit('close', false)
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
      commentApi
        .createComment(this.target, this.comment)
        .then(response => {
          // Store comment author, email, authorUrl
          localStorage.setItem('comment-author', this.comment.author)
          localStorage.setItem('comment-email', this.comment.email)
          localStorage.setItem('comment-authorUrl', this.comment.authorUrl)

          // Emit a created event
          this.$emit('created', response.data.data)
          this.$emit('close', false)
        })
        .catch(error => {
          this.$emit('failed', error.response)
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
