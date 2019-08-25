/**
  based on https://github.com/joaoeudes7/V-Emoji-Picker
 */
<template>
  <div id="Categories">
    <div
      :class="['category', { active: index === active }]"
      v-for="(categorie, index) in categories"
      :key="index"
      @click="onSelect(index)"
    >
      <VSvg :name="categorie.icon" />
    </div>
  </div>
</template>

<script>
import VSvg from './VSvg'

export default {
  name: 'Categories',
  components: {
    VSvg
  },
  data: () => ({
    categories: [
      { name: 'Frequenty', icon: 'frequenty' },
      { name: 'Peoples', icon: 'peoples' },
      { name: 'Nature', icon: 'nature' },
      { name: 'Foods', icon: 'foods' },
      { name: 'Activity', icon: 'activity' },
      { name: 'Objects', icon: 'objects' },
      { name: 'Places', icon: 'places' },
      { name: 'Symbols', icon: 'symbols' },
      { name: 'Flags', icon: 'flags' }
    ],
    active: 1
  }),
  methods: {
    onSelect(index) {
      this.active = index

      const _category = this.categories[index]
      this.$emit('select', _category)
    }
  }
}
</script>

<style>
</style>
