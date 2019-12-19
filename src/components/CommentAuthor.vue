<template>
  <div
    id="comment-author"
    class="comment-placeholder"
  >
    <div class="comment-item">
      <img
        v-if="options.comment_gravatar_default"
        class="comment-item-author-avatar"
        :src="avatar"
        :alt="comment.author"
      >
      <div class="comment-item-main">
        <div class="comment-item-header">
          <span class="header-author">
            {{ comment.author || '...' }}
          </span>
        </div>
        <div class="comment-item-content">
          <p
            v-if="this.comment.content"
            v-html="renderedContent"
          ></p>
          <p v-else>{{ options.comment_content_placeholder || '撰写评论...'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import md5 from 'md5'

export default {
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      required: false,
      default: []
    }
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked(this.comment.content, { sanitize: true }) : ''
    },
    avatar() {
      if (!this.comment.email) {
        return '//cdn.v2ex.com/gravatar?d=' + this.options.comment_gravatar_default
      }
      const gravatarMd5 = md5(this.comment.email)
      return `//cdn.v2ex.com/gravatar/${gravatarMd5}?s=256&d=` + this.options.comment_gravatar_default
    }
  },
  created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author')
    this.comment.authorUrl = localStorage.getItem('comment-authorUrl')
    this.comment.email = localStorage.getItem('comment-email')
  }
}
</script>

<style lang="scss">
</style>
