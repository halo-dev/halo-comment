/** based on https://github.com/joaoeudes7/V-Emoji-Picker */
<template>
  <div id="Emojis">
    <div ref="container-emoji" class="container-emoji">
      <template v-if="continuousList">
        <div class="category-line" v-for="(category, category_name) in dataFilteredByCategory" :key="category_name">
          <div v-show="category.length" class="category-title" :ref="category_name">
            {{ category_name }}
          </div>
          <div v-if="category.length" class="grid-emojis" :style="gridDynamic">
            <Emoji
              v-for="(emoji, index_e) in category"
              :key="`${category_name}-${index_e}`"
              :data="emoji['emoji']"
              @click.native="onSelect(emoji)"
            />
          </div>
        </div>
      </template>
      <div v-else class="grid-emojis" :style="gridDynamic">
        <Emoji
          v-for="(emoji, index) in dataFiltered"
          :key="index"
          :data="emoji['emoji']"
          @click.native="onSelect(emoji)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Emoji from './Emoji'

export default {
  name: 'EmojiList',
  components: {
    Emoji
  },
  props: {
    data: { type: Object, required: true },
    emojisByRow: { type: Number, required: true },
    filter: { type: String },
    continuousList: { type: Boolean },
    category: { type: String }
  },
  methods: {
    onSelect(emoji) {
      this.$emit('select', emoji)
    }
  },
  computed: {
    gridDynamic() {
      const percent = 100 / this.emojisByRow
      return {
        gridTemplateColumns: `repeat(${this.emojisByRow}, ${percent}%)`
      }
    },
    dataFiltered() {
      let data = this.data[this.category]
      const searchValue = this.filter.trim()

      if (searchValue) {
        data = data.filter(item => item.aliases.some(alias => alias.includes(searchValue.toLowerCase())))
      }

      return data
    },
    dataFilteredByCategory() {
      let _data = Object.assign({}, this.data)
      const searchValue = this.filter.trim()

      if (searchValue) {
        this.categories.forEach(category => {
          _data[category] = this.data[category].filter(item =>
            item.aliases.some(alias => alias.includes(searchValue.toLowerCase()))
          )
        })
      }

      return _data
    },
    categories() {
      return Object.keys(this.data)
    }
  },
  watch: {
    data() {
      this.$refs['container-emoji'].scrollTop = 0
    },
    category(new_category) {
      if (this.continuousList) {
        const firstItemCategory = this.$refs[new_category][0]
        const scrollTop = firstItemCategory.offsetTop - 80

        this.$refs['container-emoji'].scrollTop = scrollTop
      }
    }
  }
}
</script>

<style></style>
