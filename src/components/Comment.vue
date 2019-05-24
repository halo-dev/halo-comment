<template>
  <div class="halo-comment">
    <section
      class="header"
      @click="editorVisiable = true"
    >
      <comment-author :comment="editingComment" />
    </section>

    <section class="body">
      <comment-body
        :comments="comments"
        :targetId="id"
        :target="target"
      />
    </section>

    <section class="pagination">
      <pagination
        :page="pagination.page"
        :size="pagination.size"
        :total="pagination.total"
        @change="handlePaginationChange"
      />
    </section>

    <section class="footer-editor">
      <comment-editor
        v-if="editorVisiable"
        :targetId="id"
        :target="target"
        @close="handleEditorClose"
        @input="handleEditorInput"
      />
    </section>

  </div>
</template>

<script>
import './index'
import commentApi from '../apis/comment'

export default {
  name: 'Comment',
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
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      comments: [],
      pagination: {
        page: 0,
        sort: '',
        size: 5,
        total: 0
      },
      editorVisiable: false,
      editingComment: {}
    }
  },
  computed: {
    target() {
      // pluralize it
      return `${this.type}s`
    }
  },
  created() {
    this.loadComments()
  },
  methods: {
    loadComments() {
      commentApi.listComments(this.target, this.id, 'top_view', this.pagination).then(response => {
        this.comments = response.data.data.content
        this.pagination.size = response.data.data.rpp
        this.pagination.total = response.data.data.total
      })
    },
    handlePaginationChange(page) {
      this.pagination.page = page
      this.loadComments()
    },
    handleEditorClose() {
      this.editorVisiable = false
      this.editingComment = {}
    },
    handleEditorInput(comment) {
      this.editingComment = comment
    }
  }
}
</script>

<style lang="scss">
@import '../styles/global';

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
