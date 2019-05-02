<template>
  <div>
    <comment-node v-if="comment">
      <figure
        class="avatar"
        slot="comment-icon"
      >
        <img
          :src="avatar"
          :alt="comment.author"
        >
      </figure>

      <div
        slot="comment-title"
        class="comment-author-wrapper"
      >
        <span class="comment-author">{{ comment.author }}</span>
        <span class="comment-author-time m-2">{{ createTimeAgo }} ago</span>
      </div>

      <p
        slot="comment-content"
        v-html="comment.content"
      />

      <p
        slot="comment-action-bottom"
        class="comment-action"
      >
        <span @click="handleReplyClick">回复</span>
      </p>

      <template v-if="comment.children">
        <comment-tree
          slot="comment-inner"
          v-for="(child, index) in comment.children"
          :key="index"
          :comment="child"
          @reply="$emit('reply', child)"
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
    }
  }
}
</script>

<style lang="scss">
.comment-author-wrapper {
  height: 18px;
  line-height: 18px;
  margin-bottom: 8px;
  font-size: 14px;
  .comment-author-time {
    font-size: 12px;
    color: #808283;
  }
}

.comment-action {
  > span {
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
  .action-like {
    .action-like-number {
      box-sizing: border-box;
    }
  }
}
</style>
