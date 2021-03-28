<template>
  <div id="comment-author" class="comment-placeholder">
    <div class="comment-item">
      <img
        v-if="options.comment_gravatar_default"
        class="comment-item-author-avatar"
        :src="avatar"
        :alt="comment.author"
      />
      <div class="comment-item-main">
        <div class="comment-item-header">
          <span class="header-author">
            {{ comment.author || '...' }}
          </span>
        </div>
        <div class="comment-item-content">
          <p v-if="this.comment.content" v-html="renderedContent"></p>
          <p v-else>{{ options.comment_content_placeholder || '撰写评论...' }}</p>
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
      const gravatarDefault = this.options.comment_gravatar_default
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/'

      if (!this.comment.email || !this.validEmail(this.comment.email)) {
        return `${gravatarSource}?d=${gravatarDefault}`
      }

      const gravatarMd5 = md5(this.comment.email)
      return `${gravatarSource}${gravatarMd5}?s=256&d=` + gravatarDefault
    }
  },
  created() {
    // Get info from local storage
    this.comment.author = localStorage.getItem('comment-author')
    this.comment.authorUrl = localStorage.getItem('comment-authorUrl')
    this.comment.email = localStorage.getItem('comment-email')
  },
  methods: {
    validEmail(email) {
      var re = /^[A-Za-z1-9]+([-_.][A-Za-z1-9]+)*@([A-Za-z1-9]+[-.])+[A-Za-z]{2,8}$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss"></style>
