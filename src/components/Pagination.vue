<template>
  <ul class="pagination">
    <li
      class="page-item page-prev"
      :class="{disabled: !hasPrev}"
    >
      <a @click="handlePrevClick">
        <div class="page-item-subtitle">
          <i class="icon icon-arrow-left"></i>
        </div>
        <div class="page-item-title h5">上一页</div>
      </a>
    </li>
    <li
      class="page-item page-next"
      :class="{disabled: !hasNext}"
    >
      <a @click="handleNextClick">
        <div class="page-item-subtitle">
          <i class="icon icon-arrow-right"></i>
        </div>
        <div class="page-item-title h5">下一页</div>
      </a>
    </li>
  </ul>
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
  computed: {
    pages() {
      return Math.ceil(this.total / this.size)
    },
    hasNext() {
      return this.page < this.pages - 1
    },
    hasPrev() {
      return this.page > 0
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
    }
  }
}
</script>

<style>
</style>
