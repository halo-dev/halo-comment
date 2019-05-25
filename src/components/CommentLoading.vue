<template>
  <transition name="loading-fade" mode="in-out">
    <div class="comment-loading">
      <svg viewBox="0 0 50 50">
        <circle
          class="ring"
          cx="25"
          cy="25"
          r="20"
        ></circle>
        <circle
          class="ball"
          cx="25"
          cy="5"
          r="3.5"
        ></circle>
      </svg>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'CommentLoading'
}
</script>
<style lang="scss">
.comment-loading {
  text-align: center;

  svg {
    width: 3.75em;
    animation: 1.5s spin ease infinite;

    .ring {
      fill: none;
      stroke: hsla(341, 97%, 59%, 0.3);
      stroke-width: 2;
    }

    .ball {
      fill: #fc2f70;
      stroke: none;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
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

