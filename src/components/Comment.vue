<template>
  <div>Comment</div>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return {}
  },
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: 'post',
      validator: function(value) {
        // The value must match one of these strings
        return ['post', 'sheet', 'journal'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style>
</style>
