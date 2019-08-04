<template>
  <transition
    name="loading-fade"
    mode="in-out"
  >
    <div class="comment-loader-container">
      <div class="comment-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'CommentLoading'
}
</script>

