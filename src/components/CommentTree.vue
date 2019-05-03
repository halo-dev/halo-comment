<template>
  <div>
    <comment-node v-if="comment">
      <figure
        class="avatar avatar-lg"
        slot="comment-icon"
      >
        <img
          :src="avatar"
          :alt="comment.author"
        >
      </figure>
      <p
        slot="comment-title"
        class="comment-author-wrapper"
      >
        <span class="comment-author">{{ comment.author }}</span>
        <span class="comment-author-time m-2">{{ createTimeAgo }} ago</span>
      </p>

      <p
        slot="comment-content"
        v-html="comment.content"
      />

      <template slot="comment-action-bottom">
        <p>
          <button
            class="btn btn-sm btn-link"
            @click="handleReplyClick"
          >回复</button>
        </p>
      </template>

      <template v-if="comment.children">
        <comment-tree
          slot="comment-inner"
          v-for="(child, index) in comment.children"
          :key="index"
          :comment="child"
          @reply="handleSubReply"
        />
      </template>

    </comment-node>
  </div>
</template>

<script>
import { timeAgo } from '@/utils/time'

import CommentNode from './CommentNode'

export default {
  name: 'CommentTree',
  components: {
    CommentNode
  },
  props: {
    comment: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    avatar() {
      return `//gravatar.loli.net/avatar/${this.comment.gavatarMd5}/?s=256&d=mp`
    },
    createTimeAgo() {
      return timeAgo(this.comment.createTime)
    }
  },
  methods: {
    handleReplyClick() {
      this.$emit('reply', this.comment)
    },
    handleSubReply(comment) {
      this.$emit('reply', comment)
    }
  }
}
</script>

<style lang="scss">
.comment-author-wrapper {
  .comment-author-time {
    font-size: 12px;
    color: #808283;
  }
}

.comment-action {
  padding-right: 10px;
  transition: color 0.3s;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
