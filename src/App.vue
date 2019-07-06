<template>
  <div id="app">
    <Comment
      :id="44"
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
