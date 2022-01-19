<template>
  <div class="comment-placeholder">
    <div class="comment-item">
      <img :alt="comment.author" :src="avatar" class="comment-item-author-avatar" />
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
import { isEmail } from '../utils/util'
import { marked } from 'marked'
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
      return this.comment.content ? marked.parse(this.comment.content) : ''
    },
    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/'

      if (!this.comment.email || !isEmail(this.comment.email)) {
        return `${gravatarSource}?s=256&d=${gravatarDefault}`
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
  }
}
</script>
