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
<style lang="scss">
.comment-loader-container {
  text-align: center;
  display: flex;
  justify-content: center;
  .comment-loader {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 2em;

    span {
      width: 0.3em;
      height: 1em;
      background-color: #3b83ee;
      &:nth-of-type(1) {
        animation: grow 1s -0.45s ease-in-out infinite;
      }
      &:nth-of-type(2) {
        animation: grow 1s -0.3s ease-in-out infinite;
      }
      &:nth-of-type(3) {
        animation: grow 1s -0.15s ease-in-out infinite;
      }
      &:nth-of-type(4) {
        animation: grow 1s ease-in-out infinite;
      }
    }

    @keyframes grow {
      0%,
      100% {
        transform: scaleY(1);
      }

      50% {
        transform: scaleY(2);
      }
    }
  }
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.loading-fade-enter,
.loading-fade-leave-to {
  opacity: 0;
}
</style>

