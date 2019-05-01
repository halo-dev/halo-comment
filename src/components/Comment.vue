<template>
  <div>
    Comments of {{ id }}
    <comment-tree
      v-for="(comment,index) in comments"
      :key="index"
      :comment="comment"
    />
    <a-pagination
      :defaultCurrent="pagination.page"
      :total="pagination.total"
      @change="handlePaginationChange"
    />
  </div>
</template>

<script>
import commentApi from '@/apis/comment'
import CommentTree from './CommentTree'

export default {
  components: {
    CommentTree
  },
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: 'post',
      validator: function(value) {
        // The value must match one of these strings
        return ['post', 'sheet', 'journal'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      comments: [],
      pagination: {
        page: 1,
        total: 0,
      }
    }
  },
  created() {
    this.loadComments()
  },
  methods: {
    loadComments() {
      const pagination = Object.assign({}, this.pagination)
      pagination.page--
      commentApi.listPostComment(this.id, pagination, 'tree_view').then(response => {
        this.comments = response.data.data.content
        this.pagination.total = response.data.data.total
      })
    },
    handlePaginationChange(page, size) {
      this.pagination.page = page
      this.loadComments()
    }
  }
}
</script>

<style>
</style>
