<template>
  <div id="app">
    <Comment :id="15"/>
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
