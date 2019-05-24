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
          <li v-if="comment.hasChildren">
            <button
              class="item-control-more"
              @click="handleMoreClick"
            >更多</button>
          </li>
          <li><button class="item-control-reply">回复</button></li>
        </ul>
      </div>
    </div>
    <div
      class="comment-item-children"
      v-if="hasChildrenBody"
    >
      <comment-body
        :comments="children"
        :targetId="targetId"
        :target="target"
      />
    </div>
  </div>
</template>

<script>
import { timeAgo, isUrl } from '@/utils/util'
import marked from 'marked'
import commentApi from '../apis/comment'
import CommentBody from './CommentBody'

export default {
  name: 'CommentNode',
  components: { CommentBody },
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
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
      children: []
    }
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
    },
    hasChildrenBody() {
      return this.comment.hasChildren && this.children !== null && this.children.length > 0
    }
  },
  methods: {
    handleMoreClick() {
      // Get children
      commentApi.listChildren(this.target, this.targetId, this.comment.id).then(response => {
        this.children = response.data.data
      })
    }
  }
}
</script>

<style>
</style>
