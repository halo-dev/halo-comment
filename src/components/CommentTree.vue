<template>
  <a-comment v-if="comment">
    <span slot="actions">回复</span>
    <a slot="author">{{ comment.author }}</a>
    <a-avatar
      slot="avatar"
      :src="avatar"
      :alt="comment.author"
    />
    <p
      slot="content"
      v-html="comment.content"
    />
    <a-tooltip
      slot="datetime"
      :title="comment.userAgent"
    >
      <span>{{ createTimeAgo }} ago</span>
    </a-tooltip>
    <template v-if="comment.children">
      <comment-tree
        v-for="(child, index) in comment.children"
        :key="index"
        :comment="child"
      />
    </template>
  </a-comment>
</template>

<script>
import { timeAgo } from '@/utils/time'
export default {
  name: 'CommentTree',
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
  }
}
</script>

<style>
</style>
