<template>
  <div id="app">
    <Comment :id="7" />
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
