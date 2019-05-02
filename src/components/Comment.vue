<template>
  <div>
    Comments of {{ id }}
    <hr />
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
          <blockquote class="blockquote">
            {{ replyComment.content }}
          </blockquote>
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
          <div v-show="editActivated">
            <textarea
              class="form-input comment-textarea"
              name="comment-editor"
              id="comment-editor"
              rows="6"
              v-model="content"
            ></textarea>
            <p class="comment-textarea-tip">支持 markdown 格式</p>
          </div>

          <div v-show="previewActivated">
            <div
              class="markdown-content"
              v-html="compileContent"
            ></div>
          </div>

        </div>

        <div class="panel-footer">
          <button class="btn">
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
      class="p-centered text-center"
      v-if="!havingComment"
    >
      <span>Ops! 当前暂无评论</span>
    </div>
    <pagination
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
      content: '# Hello World!',
      editActivated: true,
      previewActivated: false,
      replyComment: null
    }
  },
  computed: {
    compileContent() {
      return marked(this.content, { sanitize: true })
    },
    havingComment() {
      return this.comments && this.comments.length > 0
    }
  },
  created() {
    this.loadComments()
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
.comment-textarea {
  border-bottom: 1px dashed #dfe2e5;
}

.comment-textarea-tip {
  padding: 0.5rem;
  border: 1px solid #dfe2e5;
  border-top: 0;
  margin-bottom: 0;
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
