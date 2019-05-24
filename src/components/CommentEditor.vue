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
              <button
                type="button"
                class="editor-btn-close"
                @click="close"
              >&times;</button>
            </li>
          </ul>
          <div class="comment-poster-main">
            <div class="comment-poster-main-body">
              <img
                class="comment-poster-body-avatar"
                src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
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
                      placeholder="邮箱*"
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
                      placeholder="撰写评论..."
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
                        title="回复"
                      >评论</button>
                    </li>
                    <li class="editor-item-preview">
                      <button
                        class="editor-btn-preview"
                        title="预览"
                        type="button"
                      >预览</button>
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
