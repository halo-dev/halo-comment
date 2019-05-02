<template>
  <div>
    <div class="tile">
      <slot
        name="comment-icon"
        class="tile-icon"
      />
      <div class="tile-content">
        <slot
          name="comment-title"
          class="tile-title"
        />
        <slot
          name="comment-content"
          class="tile-subtitle"
        />
        <slot name="comment-action-bottom" />

        <slot name="comment-inner" />
      </div>
      <slot
        name="comment-action"
        class="tile-action"
      />
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
