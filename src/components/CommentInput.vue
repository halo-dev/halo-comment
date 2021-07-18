<template>
  <div class="comment-input">
    <input :placeholder="placeholder" :type="type" :value="value" @input="inputHandle" />
    <section class="comment-input-suggestion">
      <div
        v-for="suggestion in suggestionListHandle"
        :key="suggestion.id"
        class="comment-input-suggestion-item"
        @click="useSuggestion(suggestion)"
      >
        {{ suggestionHandle(suggestion) }}
      </div>
    </section>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: () => 'text' },
    value: { type: String },
    placeholder: { type: String },

    // suggestionList
    // format: [{ id: 'id', prefix: 'prefix', suffix: 'suffix'},...]
    suggestionList: { type: Array },

    suffixFlag: { type: String },
    prefixFlag: { type: String }
  },

  computed: {
    suggestionListHandle() {
      let newSuggestionList = this.suggestionList

      if (this.value == null) return

      // exclude prefix
      if (this.value.indexOf(this.prefixFlag) !== -1) {
        newSuggestionList.length = 0
      }

      // exclude suffix
      if (this.value.indexOf(this.suffixFlag) !== -1) {
        let currentSuffix = this.value.substr(this.value.indexOf(this.suffixFlag))

        // Exclude not present && 已包含
        newSuggestionList = this.suggestionList.filter(
          val => val.suffix.indexOf(currentSuffix) > -1 && currentSuffix !== val.suffix
        )
      }
      return newSuggestionList
    }
  },

  methods: {
    suggestionHandle(suggestion) {
      let temp = ''
      if (suggestion.prefix) {
        temp += suggestion.prefix
      }
      temp += this.value.split(this.suffixFlag)[0]

      if (suggestion.suffix) {
        temp += suggestion.suffix
      }
      return temp
    },
    useSuggestion(suggestion) {
      let customEvent = { target: { value: this.suggestionHandle(suggestion) } }
      this.inputHandle(customEvent)
    },

    inputHandle(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
