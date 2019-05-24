// Register components
import Vue from 'vue'

// pro components
import CommentBody from './CommentBody'
import CommentNode from './CommentNode'
import CommentEditor from './CommentEditor'
import Pagination from './Pagination'

const _components = {
  CommentBody,
  CommentNode,
  CommentEditor,
  Pagination
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
