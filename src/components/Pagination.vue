<template>
  <ul class="pagination">
    <li class="page-item page-prev">
      <a href="#">
        <div class="page-item-subtitle">
          <i class="icon icon-arrow-left"></i>
        </div>
      </a>
    </li>
    <li class="page-item page-next">
      <a href="#">
        <div class="page-item-subtitle">
          <i class="icon icon-arrow-right"></i>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    current: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<style>
</style>
