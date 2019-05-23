<template>
  <div class="comment-item">
    <img
      class="comment-item-author-avatar"
      :src="avatar"
      :alt="comment.author"
    >
    <div class="comment-item-main">
      <div class="comment-item-header">
        <span class="header-author">
          <a
            v-if="urlValid"
            :href="comment.authorUrl"
            target="_blank"
            v-text="comment.author"
          />
          <a
            v-else
            href="javascript:void(0)"
            v-text="comment.author"
          />
        </span>
        <span
          class="header-time"
          v-text="createTimeAgo"
        />
      </div>
      <div class="comment-item-content">
        <p v-html="compileContent" />
      </div>
      <div class="comment-item-contols">
        <ul>
          <li><button class="item-control-reply">回复</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { timeAgo, isUrl } from '@/utils/util'
import marked from 'marked'

export default {
  name: 'CommentNode',
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {
    avatar() {
      return `//gravatar.loli.net/avatar/${this.comment.gavatarMd5}/?s=256&d=mp`
    },
    createTimeAgo() {
      return timeAgo(this.comment.createTime)
    },
    compileContent() {
      return marked(this.comment.content, { sanitize: true })
    },
    urlValid() {
      return isUrl(this.comment.authorUrl)
    }
  },
  methods: {}
}
</script>

<style>
</style>
