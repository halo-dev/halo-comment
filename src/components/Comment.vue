<template>
  <div class='halo-comment'>
    <section class='header' @click='handleOpenEditor()'>
      <comment-placeholder :comment='editingComment' :options='options' />
    </section>
    <section
      class='
        comment-alert'
    >
      <!-- Info -->
      <div v-for='(info, index) in infoes' :key='index' class='alert info'>
        <span class='closebtn' @click='clearAlertClose'>&times;</span>
        <strong>{{ info }}</strong>
      </div>

      <!-- Success -->
      <div v-for='(success, index) in successes' :key='index' class='alert success'>
        <span class='closebtn' @click='clearAlertClose'>&times;</span>
        <strong>{{ success }}</strong>
      </div>

      <!-- Warning -->
      <div v-for='(warning, index) in warnings' :key='index' class='alert warning'>
        <span class='closebtn' @click='clearAlertClose'>&times;</span>
        <strong>{{ warning }}</strong>
      </div>
    </section>

    <section class='loading'>
      <comment-loading v-show='comments.loading' />
    </section>

    <section class='body'>
      <comment-body
        v-show='!comments.loading'
        :comments='comments.data'
        :options='options'
        :target='target'
        :targetId='id'
        @reply='handleReply'
      />
    </section>

    <section class='pagination'>
      <pagination
        :page='comments.params.page'
        :size='comments.params.size'
        :total='comments.total'
        @change='handlePaginationChange'
      />
    </section>

    <section class='footer-editor'>
      <comment-editor
        v-if='editor.visible'
        :options='options'
        :replyingComment='replyingComment'
        :target='target'
        :targetId='id'
        @close='handleEditorClose'
        @created='handleCommentCreated'
        @exit='handleEditorExit'
        @failed='handleFailedToCreateComment'
        @input='handleEditorInput'
      />
    </section>
  </div>
</template>

<script>
import './index'
import { isObject } from '../utils/util'
import apiClient from '@/plugins/api-client'

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
      comments: {
        data: [],
        loading: false,
        total: 0,
        params: {
          page: 0,
          size: 10
        }
      },

      options: [],

      editor: {
        visible: false
      },

      editingComment: {},
      infoes: [],
      warnings: [],
      successes: [],
      repliedSuccess: null,
      replyingComment: null
    }
  },
  computed: {
    target() {
      // pluralize it
      return `${this.type}s`
    }
  },
  created() {
    this.handleListComments()
    this.handleListOptions()
  },
  methods: {
    /**
     * List top comments.
     */
    handleListComments() {
      this.comments.data = []
      this.comments.loading = true
      apiClient.comment
        .listTopComments(this.target, this.id, this.comments.params)
        .then(response => {
          this.comments.data = response.data.content
          this.comments.total = response.data.total
        })
        .finally(() => {
          this.comments.loading = false
        })
    },

    /**
     * List comment options.
     */
    handleListOptions() {
      apiClient.option.comment().then(response => {
        this.options = response.data
      })
    },

    /**
     * Open comment editor.
     */
    handleOpenEditor() {
      this.editor.visible = true
      this.replyingComment = null
      this.repliedSuccess = null
    },

    handlePaginationChange(page) {
      this.comments.params.page = page
      this.handleListComments()
    },
    handleEditorClose() {
      this.editor.visible = false
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
        this.handleListComments()
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
      this.editor.visible = true
    },
    clearAlertClose() {
      this.infoes = []
      this.warnings = []
      this.successes = []
    }
  }
}
</script>

<style lang='scss'>
@import '../styles/global';

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>