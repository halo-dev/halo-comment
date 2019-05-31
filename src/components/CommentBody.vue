<template>
  <transition name="comment-fade">
    <div class="comment-items">
      <template v-for="(comment, index) in comments">
        <comment-node
          :comment="comment"
          :targetId="targetId"
          :target="target"
          :key="index"
          :options="options"
          @reply="handleReply"
        />
      </template>
    </div>
  </transition>
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
    },
    options: {
      required: false,
      default: []
    }
  },
  data() {
    return {}
  },
  methods: {
    handleReply(comment, repliedSuccess) {
      this.$emit('reply', comment, repliedSuccess)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-fade-enter-active,
.comment-fade-leave-active {
  transition: all 1s ease-in-out;
}
.comment-fade-enter,
.comment-fade-leave-to {
  opacity: 0;
}
</style>
