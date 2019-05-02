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

      <span slot="comment-title">{{ createTimeAgo }} ago</span>
      <p
        slot="comment-content"
        v-html="comment.content"
      />

      <p slot="comment-action-bottom">
        <button
          class="btn btn-sm"
          @click="handleReplyClick"
        >回复</button>
      </p>

      <template v-if="comment.children">
        <comment-tree
          slot="comment-inner"
          v-for="(child, index) in comment.children"
          :key="index"
          :comment="child"
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
</style>
