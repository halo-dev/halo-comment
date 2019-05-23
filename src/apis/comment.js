import service from '@/utils/service'

const baseUrl = '/api/content'

const commentApi = {}

/**
 * Creates a comment.
 * @param {String} target
 * @param {Object} comment
 */
commentApi.createComment = (target, comment) => {
  return service({
    url: `${baseUrl}/${target}/comments`,
    method: 'post',
    data: comment
  })
}

// List api
commentApi.listComments = (target, targetId, view = 'list_view', pagination) => {
  return service({
    url: `${baseUrl}/${target}/${targetId}/comments/${view}`,
    params: pagination,
    method: 'get'
  })
}

export default commentApi
