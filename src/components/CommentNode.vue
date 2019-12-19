<template>
  <div
    class="comment-item"
    :id="comment.id"
  >
    <img
      v-if="options.comment_gravatar_default"
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
        <span v-if="comment.isAdmin" class="header-admin">博主</span>
        <span class="header-time">{{createTimeAgo}}</span>
        <a :href="'#'+comment.id">
          <span
            class="header-id"
            :id="comment.id"
          >
            #{{ comment.id }}
          </span>
        </a>
      </div>
      <div class="comment-item-content">
        <a
          v-if="hasParent"
          :href="'#' + comment.parentId"
        >
          <span class="content-at-id">
            #{{ comment.parentId }}
          </span>
        </a>
        <p v-html="compileContent"></p>
      </div>
      <div class="comment-item-contols">
        <ul>
          <li v-if="comment.hasChildren">
            <button
              class="item-control-more"
              @click="handleMoreClick"
            >更多</button>
          </li>
          <li><button
              class="item-control-reply"
              @click="handleReplyClick"
            >回复</button></li>
        </ul>
      </div>
    </div>
    <div
      class="comment-item-children"
      v-if="hasChildrenBody"
    >
      <section class="loading">
        <comment-loading v-show="commentLoading" />
      </section>
      <comment-body
        v-show="!commentLoading"
        :comments="children"
        :targetId="targetId"
        :target="target"
        :options="options"
        @reply="handleChildReply"
      />
    </div>
  </div>
</template>

<script>
import { timeAgo, isUrl } from '@/utils/util'
import marked from 'marked'
import commentApi from '../apis/comment'

export default {
  name: 'CommentNode',
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
    },
    options: {
      required: false,
      default: []
    }
  },
  data() {
    return {
      children: [],
      commentLoading: false
    }
  },
  computed: {
    avatar() {
      return `//cdn.v2ex.com/gravatar/${this.comment.gravatarMd5}?s=256&d=` + this.options.comment_gravatar_default
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
    },
    hasParent() {
      return this.comment.parentId !== null && this.comment.parentId > 0
    }
  },
  methods: {
    handleMoreClick() {
      // Get children
      this.children = []
      this.commentLoading = true
      commentApi.listChildren(this.target, this.targetId, this.comment.id).then(response => {
        this.children = response.data.data
        setTimeout(() => {
          this.commentLoading = false
        }, 300)
      })
    },
    handleReplyClick() {
      this.$emit('reply', this.comment, this.repliedSuccess)
    },
    handleChildReply(comment, repliedSuccess) {
      this.$emit('reply', comment, repliedSuccess)
    },
    repliedSuccess() {
      // DO NOTHING...
    }
  }
}
</script>

<style>
</style>
