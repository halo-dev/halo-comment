import service from '@/utils/service'

const baseUrl = '/api/content'

const commentApi = {}

/**
 * Lists comment.
 * @param {String} target
 * @param {Object} view
 */
function listComment(target, targetId, view, pagination) {
  return service({
    url: `${baseUrl}/${target}/${targetId}/comments/${view}`,
    params: pagination,
    methods: 'get'
  })
}

/**
 * Creates a comment.
 * @param {String} target
 * @param {Object} comment
 */
function createComment(target, comment) {
  return service({
    url: `${baseUrl}/${target}/comments`,
    methods: 'post',
    data: comment
  })
}

// List api

commentApi.listPostComment = (postId, pagination, view = 'list_view') => {
  return listComment('posts', postId, view, pagination)
}
commentApi.listSheetComment = (postId, pagination, view = 'list_view') => {
  return listComment('sheets', postId, view, pagination)
}
commentApi.listJournalComment = (postId, pagination, view = 'list_view') => {
  return listComment('journals', postId, view, pagination)
}

// Creation api

commentApi.createPostComment = comment => {
  return createComment('posts', comment)
}

commentApi.createSheetComment = comment => {
  return createComment('sheets', comment)
}

commentApi.createJournalComment = comment => {
  return createComment('journals', comment)
}

export default commentApi
