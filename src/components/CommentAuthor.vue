<template>
  <div
    id="comment-author"
    class="comment-placeholder"
  >
    <div class="comment-item">
      <img
        class="comment-item-author-avatar"
        :src="avatar"
        :alt="comment.author"
      >
      <div class="comment-item-main">
        <div class="comment-item-header">
          <span class="header-author">
            {{ comment.author }}
          </span>
        </div>
        <div class="comment-item-content">
          <p
            v-if="this.comment.content"
            v-html="renderedContent"
          ></p>
          <p v-else>撰写评论...（1000 个字符内）</p>
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
    }
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked(this.comment.content, { sanitize: true }) : ''
    },
    avatar() {
      if (!this.comment.email) {
        return 'https://gravatar.loli.net/avatar?d=mp'
      }
      const gavatarMd5 = md5(this.comment.email)
      return `//gravatar.loli.net/avatar/${gavatarMd5}/?s=256&d=mp`
    }
  }
}
</script>

<style lang="scss">
</style>
