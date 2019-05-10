<template>
  <div id="app">
    <Comment :id="12" type="sheet"/>
  </div>
</template>

<script>
import Comment from './components/Comment.vue'

export default {
  name: 'app',
  components: {
    Comment
  }
}
</script>

<style>
</style>
