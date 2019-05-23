<template>
  <div class="halo-comment">
    <section class="header">
      <div class="comment-placeholder">
        <div class="comment-item">
          <img
            class="comment-item-author-avatar"
            src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
          >
          <div class="comment-item-main">
            <div class="comment-item-header">
              <span class="header-author">
                Ryan Wang
              </span>
            </div>
            <div class="comment-item-content">
              <p>撰写评论...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="body">
      <comment-body :comments="comments" />
    </section>

    <section class="pagination">
      <pagination />
    </section>

    <section class="footer-editor">
      <comment-editor />
    </section>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import CommentEditor from './CommentEditor'
import pagination from './Pagination'
import commentApi from '../apis/comment'

export default {
  name: 'Comment',
  components: { CommentBody, CommentEditor, pagination },
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
        sort: ''
      }
    }
  },
  computed: {
    target() {
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
      })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/global';
</style>
