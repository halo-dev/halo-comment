<template>
  <div>
    <div class="tile">
      <div class="tile-icon">
        <slot name="comment-icon" />
      </div>
      <div class="tile-content">
        <div class="tile-title">
          <slot name="comment-title" />
        </div>

        <div class="tile-subtitle">
          <slot name="comment-content" />
        </div>
        <slot name="comment-action-bottom" />

        <slot name="comment-inner" />
      </div>

      <div class="tile-action">
        <slot name="comment-action" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentNode'
}
</script>

<style lang="scss">
</style>
