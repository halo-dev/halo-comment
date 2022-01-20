<template>
  <div :id="comment.id" class="comment-item">
    <img
      v-if="options.comment_gravatar_default"
      :alt="comment.author"
      :src="avatar"
      class="comment-item-author-avatar"
    />
    <div class="comment-item-main">
      <div class="comment-item-header">
        <span class="header-author">
          <a v-if="urlValid" :href="comment.authorUrl" target="_blank" v-text="comment.author" />
          <a v-else href="javascript:void(0)" v-text="comment.author" />
        </span>
        <span v-if="comment.isAdmin" class="header-admin">博主</span>
        <span class="header-time">{{ createTimeAgo }}</span>
        <a :href="'#' + comment.id">
          <span :id="comment.id" class="header-id"> #{{ comment.id }} </span>
        </a>
      </div>
      <div class="comment-item-content">
        <a v-if="hasParent" :href="'#' + comment.parentId">
          <span class="content-at-id"> #{{ comment.parentId }} </span>
        </a>
        <p v-html="compileContent"></p>
      </div>
      <div class="comment-item-controls">
        <ul>
          <li v-if="comment.hasChildren">
            <button :class="{ active: hasChildrenBody }" class="item-control-more" @click="handleMoreClick">
              更多
            </button>
          </li>
          <li>
            <button class="item-control-reply" @click="handleReplyClick">回复</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="hasChildrenBody" class="comment-item-children">
      <section class="loading">
        <comment-loading v-show="commentLoading" />
      </section>
      <comment-body
        v-show="!commentLoading"
        :comments="children"
        :options="options"
        :target="target"
        :targetId="targetId"
        @reply="handleChildReply"
      />
    </div>
  </div>
</template>

<script>
import { isUrl, timeAgo } from '../utils/util'
import apiClient from '../plugins/api-client'
import { marked } from 'marked'

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
      const gravatarDefault = this.options.comment_gravatar_default
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/'
      if (this.comment.avatar) {
        return this.comment.avatar
      }
      return `${gravatarSource}${this.comment.gravatarMd5}?s=256&d=${gravatarDefault}`
    },
    createTimeAgo() {
      return timeAgo(this.comment.createTime)
    },
    compileContent() {
      return marked.parse(this.comment.content)
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
      if (this.hasChildrenBody) {
        this.children = []
        return
      }

      // Get children
      this.children = []
      this.commentLoading = true

      apiClient.comment
        .listChildren(this.target, this.targetId, this.comment.id)
        .then(response => {
          this.children = response.data
        })
        .finally(() => {
          this.commentLoading = false
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

<style></style>
