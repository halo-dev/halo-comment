<template>
  <div id="app">
    <Comment
      :id="23"
      type="post"
    />
  </div>
</template>

<script>
import Comment from './components/Comment'

export default {
  name: 'app',
  components: {
    Comment
  }
}
</script>

<style>
</style>
