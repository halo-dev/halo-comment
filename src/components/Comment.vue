<template>
  <div class="halo-comment">
    <section
      class="header"
      @click="handleCommentHeaderClick"
    >
      <comment-author
        :comment="editingComment"
        :options="options"
      />

    </section>
    <section class="
        comment-alert">
      <!-- Info -->
      <div
        class="alert info"
        v-for="(info, index) in infoes"
        :key="index"
      >
        <span
          class="closebtn"
          @click="clearAlertClose"
        >&times;</span>
        <strong>{{ info }}</strong>
      </div>

      <!-- Success -->
      <div
        class="alert success"
        v-for="(success, index) in successes"
        :key="index"
      >
        <span
          class="closebtn"
          @click="clearAlertClose"
        >&times;</span>
        <strong>{{ success }}</strong>
      </div>

      <!-- Warning -->
      <div
        class="alert warning"
        v-for="(warning, index) in warnings"
        :key="index"
      >
        <span
          class="closebtn"
          @click="clearAlertClose"
        >&times;</span>
        <strong>{{ warning }}</strong>
      </div>

    </section>

    <section class="loading">
      <comment-loading v-show="commentLoading" />
    </section>

    <section class="body">
      <comment-body
        v-show="!commentLoading"
        :comments="comments"
        :targetId="id"
        :target="target"
        :options="options"
        @reply="handleReply"
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
        v-show="editorVisiable"
        :targetId="id"
        :target="target"
        :replyingComment="replyingComment"
        :options="options"
        @close="handleEditorClose"
        @exit="handleEditorExit"
        @input="handleEditorInput"
        @created="handleCommentCreated"
        @failed="handleFailedToCreateComment"
      />
    </section>

  </div>
</template>

<script>
import './index'
import commentApi from '../apis/comment'
import optionApi from '../apis/option'
import { isObject } from '../utils/util'

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
      commentLoading: false,
      editorVisiable: false,
      alertVisiable: false,
      editingComment: {},
      infoes: [],
      warnings: [],
      successes: [],
      repliedSuccess: null,
      replyingComment: null,
      options: []
    }
  },
  computed: {
    target() {
      // pluralize it
      return `${this.type}s`
    },
    infoAlertVisiable() {
      return this.infoes !== null && this.infoes.length > 0
    },
    warningAlertVisiable() {
      return this.warnings !== null && this.warnings.length > 0
    },
    successAlertVisiable() {
      return this.successes !== null && this.successes.length > 0
    }
  },
  created() {
    this.loadComments()
    this.loadOptions()
  },
  methods: {
    loadComments() {
      this.comments = []
      this.commentLoading = true
      commentApi
        .listComments(this.target, this.id, 'top_view', this.pagination)
        .then(response => {
          this.comments = response.data.data.content
          this.pagination.size = response.data.data.rpp
          this.pagination.total = response.data.data.total
        })
        .finally(() => {
          this.commentLoading = false
        })
    },
    loadOptions() {
      optionApi.list().then(response => {
        this.options = response.data.data
      })
    },
    handleCommentHeaderClick() {
      this.editorVisiable = true
      this.replyingComment = null
      this.repliedSuccess = null
    },
    handlePaginationChange(page) {
      this.pagination.page = page
      this.loadComments()
    },
    handleEditorClose() {
      this.editorVisiable = false
    },
    handleEditorExit() {
      this.handleEditorClose()
      this.editingComment.content = null
    },
    handleEditorInput(comment) {
      this.editingComment = comment
    },
    handleCommentCreated(createdComment) {
      this.clearAlertClose()

      if (createdComment.status === 'PUBLISHED') {
        this.loadComments()
        if (this.repliedSuccess) {
          this.repliedSuccess()
        }
        this.successes.push('评论成功')
      } else {
        // Show tips
        this.infoes.push('您的评论已经投递至博主，等待博主审核！')
      }

      this.repliedSuccess = null
    },
    handleFailedToCreateComment(response) {
      this.clearAlertClose()
      this.repliedSuccess = null

      if (response.status === 400) {
        this.warnings.push(response.data.message)
        if (response.data) {
          const errorDetail = response.data.data
          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(key => {
              this.warnings.push(errorDetail[key])
            })
          }
        }
      }
    },
    handleReply(comment, repliedSuccess) {
      this.replyingComment = comment
      this.repliedSuccess = repliedSuccess
      this.editorVisiable = true
    },
    clearAlertClose() {
      this.infoes = []
      this.warnings = []
      this.successes = []
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
