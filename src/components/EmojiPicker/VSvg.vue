/** based on https://github.com/joaoeudes7/V-Emoji-Picker */
<template>
  <span id="VSvg" :style="styleSVG" v-html="icon" />
</template>

<script>
import { categories } from './_icons.js'

export default {
  name: 'VSvg',
  props: {
    name: { type: String, required: true },
    styles: { type: Object }
  },
  computed: {
    icon() {
      return categories[this.name]
    },
    styleSVG() {
      return {
        ...this.styles
      }
    }
  }
}
</script>

<style></style>
