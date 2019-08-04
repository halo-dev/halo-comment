<template>
  <div class="comment-pagination">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: !hasPrev }"
      >
        <button
          class="prev-button"
          tabindex="-1"
          @click="handlePrevClick"
        >上一页</button>
      </li>
      <!-- Show first page -->
      <li
        class="page-item"
        v-if="firstPage != null"
        :class="{ active: page === firstPage}"
      >
        <button
          @click="handlePageItemClick(firstPage)"
          :class="{ active: page === firstPage}"
        >{{ firstPage + 1}}</button>
      </li>
      <!-- Show middle page -->
      <li
        class="page-item"
        v-show="hasMorePrev"
      >
        <span>...</span>
      </li>
      <li
        class="page-item"
        v-for="middlePage in middlePages"
        :key="middlePage"
        :class="{ active: middlePage === page }"
      >
        <button
          @click="handlePageItemClick(middlePage)"
          :class="{ active: middlePage === page }"
        >
          {{ middlePage + 1}}
        </button>
      </li>

      <li
        class="page-item"
        v-show="hasMoreNext"
      >
        <span>...</span>
      </li>
      <!-- Show last page -->
      <li
        class="page-item"
        v-if="lastPage"
        :class="{ active: page === lastPage}"
      >
        <button
          @click="handlePageItemClick(lastPage)"
          :class="{ active: page === lastPage}"
        >
          {{ lastPage + 1 }}
        </button>
      </li>

      <li
        class="page-item"
        :class="{ disabled: !hasNext }"
      >
        <button
          class="next-button"
          @click="handleNextClick"
        >下一页</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  model: {
    prop: 'page',
    event: 'change'
  },
  props: {
    page: {
      type: Number,
      required: false,
      default: 0
    },
    size: {
      type: Number,
      required: false,
      default: 10
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      middleSize: 3
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.size)
    },
    hasNext() {
      return this.page < this.pages - 1
    },
    hasPrev() {
      return this.page > 0
    },
    firstPage() {
      if (this.pages === 0) {
        return null
      }
      return 0
    },
    hasMorePrev() {
      if (this.firstPage === null || this.pages <= this.middleSize + 2) {
        return false
      }
      return this.page >= 2 + this.middleSize / 2
    },
    hasMoreNext() {
      if (this.lastPage === null || this.pages <= this.middleSize + 2) {
        return false
      }
      return this.page < this.lastPage - 1 - this.middleSize / 2
    },
    middlePages() {
      if (this.pages <= 2) {
        return []
      }
      if (this.pages <= 2 + this.middleSize) {
        return this.range(1, this.lastPage)
      }
      const halfMiddleSize = Math.floor(this.middleSize / 2)
      let left = this.page - halfMiddleSize
      let right = this.page + halfMiddleSize
      if (this.page <= this.firstPage + halfMiddleSize + 1) {
        left = this.firstPage + 1
        right = left + this.middleSize - 1
      } else if (this.page >= this.lastPage - halfMiddleSize - 1) {
        right = this.lastPage - 1
        left = right - this.middleSize + 1
      }
      return this.range(left, right + 1)
    },
    lastPage() {
      if (this.pages === 0 || this.pages === 1) {
        return 0
      }
      return this.pages - 1
    }
  },
  methods: {
    handleNextClick() {
      if (this.hasNext) {
        this.$emit('change', this.page + 1)
      }
    },
    handlePrevClick() {
      if (this.hasPrev) {
        this.$emit('change', this.page - 1)
      }
    },
    handlePageItemClick(page) {
      this.$emit('change', page)
    },
    range(left, right) {
      if (left >= right) {
        return []
      }
      const result = []
      for (let i = left; i < right; i++) {
        result.push(i)
      }
      return result
    }
  }
}
</script>

<style lang="scss">
</style>
