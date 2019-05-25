// Register components
import Vue from 'vue'

// pro components
import CommentAuthor from './CommentAuthor'
import CommentBody from './CommentBody'
import CommentNode from './CommentNode'
import CommentEditor from './CommentEditor'
import CommentLoading from './CommentLoading'
import Pagination from './Pagination'

const _components = {
  CommentAuthor,
  CommentBody,
  CommentNode,
  CommentEditor,
  CommentLoading,
  Pagination
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
