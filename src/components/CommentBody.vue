<template>
  <div class="comment-items">
    <template v-for="(comment, index) in comments">
      <comment-node
        :comment="comment"
        :targetId="targetId"
        :target="target"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CommentBody',
  props: {
    comments: {
      type: Array,
      required: false,
      default: () => []
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
    return {}
  }
}
</script>

<style>
</style>
