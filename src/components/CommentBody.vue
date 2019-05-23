<template>
  <div class="comment-items">
    <template v-for="(comment, index) in comments">
      <comment-node
        :comment="comment"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import CommentNode from './CommentNode'

export default {
  name: 'CommentBody',
  components: { CommentNode },
  props: {
    comments: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
