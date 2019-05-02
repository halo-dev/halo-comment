<template>
  <div>
    <comment-node>
      <figure
        class="avatar avatar-lg"
        slot="comment-icon"
      >
        <img
          src="//gravatar.loli.net/avatar?s=256&d=mp"
          alt="Annoymouse"
        >
      </figure>

      <div
        class="panel"
        slot="comment-content"
      >
        <div
          class="panel-header"
          v-if="replyComment"
        >
          回复: {{ replyComment.author }}
          <blockquote
            class="blockquote"
            v-html="replyComment.content"
          >
          </blockquote>

          <button
            class="btn"
            @click="replyComment = null"
          >
            <i class="icon icon-cross"></i>
            取消
          </button>
        </div>
        <div class="panel-nav">
          <ul class="tab">
            <li class="tab-item">
              <a
                :class="{active: editActivated}"
                @click="editActivate"
              >
                编辑
              </a>
            </li>
            <li class="tab-item">
              <a
                :class="{active: previewActivated}"
                @click="previewActivate"
              >预览</a>
            </li>
          </ul>
        </div>

        <div class="panel-body">
          <form v-show="editActivated">
            <div class="columns input-wrapper">
              <input
                v-model="comment.email"
                class="form-input col-4 col-sm-12"
                type="email"
                placeholder="邮箱"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"
              />
              <input
                v-model="comment.author"
                class="form-input col-4 col-sm-12"
                placeholder="昵称"
              />
              <input
                v-model="comment.authorUrl"
                class="form-input col-4 col-sm-12"
                placeholder="个人网址"
              />
            </div>
            <textarea
              class="form-input comment-textarea"
              name="comment-editor"
              id="comment-editor"
              rows="6"
              v-model="comment.content"
            ></textarea>
            <p class="form-input-hint comment-textarea-tip">支持 markdown 格式</p>
          </form>

          <div v-show="previewActivated">
            <div
              class="markdown-content"
              v-html="compileContent"
            ></div>
          </div>

        </div>

        <div class="panel-footer">
          <div
            class="toast toast-error"
            v-for="(error, index) in errors"
            :key="index"
          >
            <button
              class="btn btn-clear float-right"
              @click="fieldError = null"
            ></button>
            {{ error }}
          </div>
          <button
            class="btn"
            @click="handleComment"
          >
            <i class="icon icon-upload"></i>
            提交评论
          </button>
        </div>
      </div>
    </comment-node>

    <div
      class="divider text-center"
      data-content="评论"
    ></div>

    <comment-tree
      v-for="(comment,index) in comments"
      :key="index"
      :comment="comment"
      @reply="handleReplyClick"
    />

    <div
      class="empty"
      v-if="!havingComment"
    >
      <div class="empty-icon">
        <i class="icon icon-3x icon-people"></i>
      </div>
      <p class="empty-title h5">当前还没有人留言</p>
      <p class="empty-subtitle">有什么想对作者说的么?</p>
      <div class="empty-action">
        <button class="btn btn-primary">请留言</button>
      </div>
    </div>
    <pagination
      v-else
      :hasPrev="false"
      :hasNext="true"
    />
  </div>
</template>

<script>
// import 'spectre.css/dist/spectre.min.css'

import commentApi from '@/apis/comment'
import CommentTree from './CommentTree'
import CommentNode from './CommentNode'
import Pagination from './Pagination'

import marked from 'marked'

export default {
  name: 'Comment',
  components: { CommentTree, CommentNode, Pagination },
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
        total: 0
      },
      spinning: true,
      editActivated: true,
      previewActivated: false,
      replyComment: null,
      comment: {
        author: null,
        authorUrl: null,
        content: '# Hello World!',
        email: null,
        parentId: 0,
        postId: this.id
      },
      fieldError: null
    }
  },
  computed: {
    compileContent() {
      return marked(this.comment.content, { sanitize: true })
    },
    havingComment() {
      return this.comments && this.comments.length > 0
    },
    errors() {
      const errors = []
      if (this.fieldError) {
        Object.keys(this.fieldError).forEach(key => {
          errors.push(this.fieldError[key])
        })
      }
      return errors
    }
  },
  created() {
    this.loadComments()

    // Load user data
    this.comment.author = localStorage.getItem('author')
    this.comment.email = localStorage.getItem('email')
    this.comment.authorUrl = localStorage.getItem('authorUrl')
  },
  methods: {
    editActivate() {
      this.editActivated = true
      this.previewActivated = false
    },
    previewActivate() {
      this.editActivated = false
      this.previewActivated = true
    },
    loadComments() {
      const pagination = Object.assign({}, this.pagination)
      pagination.page--
      this.spinning = true
      commentApi.listPostComment(this.id, pagination, 'tree_view').then(response => {
        this.comments = response.data.data.content
        this.pagination.total = response.data.data.total
        this.pagination.rpp = response.data.data.rpp
        this.spinning = false
      })
    },
    handlePaginationChange(page) {
      this.pagination.page = page
      this.loadComments()
    },
    handleReplyClick(comment) {
      this.replyComment = comment
    },
    handleComment() {
      if (this.replyComment) {
        this.comment.parentId = this.replyComment.id
      }

      commentApi
        .createComment(this.comment, this.type)
        .then(() => {
          this.fieldError = null
          this.replyComment = null
          this.loadComments()
          // Set local storage
          localStorage.setItem('author', this.comment.author)
          localStorage.setItem('email', this.comment.email)
          localStorage.setItem('authorUrl', this.comment.authorUrl)
        })
        .catch(error => {
          this.$log.debug('Error', error)
          if (error.response) {
            this.fieldError = error.response.data.data
            if (this.fieldError) {
              this.fieldError.message = error.response.data.message
            } else {
              this.fieldError = { message: error.response.data.message }
            }
          } else {
            this.fieldError = { message: '服务器响应失败' }
          }
        })
    }
  }
}
</script>

<style lang="scss">
@import '~spectre.css/src/spectre.scss';
@import '~spectre.css/src/spectre-icons.scss';

.center {
  text-align: center;
}

.input-wrapper {
  margin-left: 0;
  margin-right: 0;
}

.form-input {
  border-radius: 0;
}

.panel .panel-body {
  padding: 0;
}

.toast {
  margin-bottom: 0.8rem;
}

.comment-textarea {
  border-bottom: 1px dashed #dfe2e5;
}

.comment-textarea-tip {
  padding: 0.5rem;
  border: 1px solid #dfe2e5;
  border-top: 0;
  margin-bottom: 0;
  margin-top: 0;
}

.tab-item {
  a {
    cursor: pointer;
  }
}

.markdown-content {
  padding: 0.5rem;
}
</style>
