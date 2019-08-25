/**
  based on https://github.com/joaoeudes7/V-Emoji-Picker
 */
<template>
  <span
    class="emoji"
    v-html="data"
  />
</template>

<script>
export default {
  name: 'Emoji',
  props: {
    data: { type: String }
  }
}
</script>

<style></style>
