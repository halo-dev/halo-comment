<template>
  <div>
    Comments of {{ id }}
    <a-row>
      <a-col :span="24">
        <a-comment>
          <a-avatar
            slot="avatar"
            src="//gravatar.loli.net/avatar?s=256&d=mp"
            alt="Han Solo"
          />
          <div slot="content">
            <a-tabs type="card">
              <a-tab-pane
                tab="Write"
                key="1"
              >
                <a-form-item>
                  <a-textarea :rows="4" v-model="content"></a-textarea>
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane
                tab="Preview"
                key="2"
              >
                <div v-html="compiledMarkdown"></div>
              </a-tab-pane>
            </a-tabs>
            <a-form-item>
              <a-button
                htmlType="submit"
                type="primary"
              >
                提交评论
              </a-button>
            </a-form-item>
          </div>
        </a-comment>
      </a-col>
      <a-col :span="24">
        <a-spin :spinning="spinning">
          <comment-tree
            v-for="(comment,index) in comments"
            :key="index"
            :comment="comment"
          />
        </a-spin>
        <a-pagination
          class="center"
          :defaultCurrent="pagination.page"
          :pageSize="pagination.rpp"
          :total="pagination.total"
          @change="handlePaginationChange"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import commentApi from '@/apis/comment'
import CommentTree from './CommentTree'
import marked from 'marked'
import '../use'

export default {
  name: 'Comment',
  components: { CommentTree },
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
      content: '# Hello World!'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.content, { sanitize: true })
    }
  },
  created() {
    this.loadComments()
  },
  methods: {
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
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/dist/antd.css';

.center {
  text-align: center;
}
</style>
