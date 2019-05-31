import service from '@/utils/service'

const baseUrl = '/api/content/options'

const optionApi = {}

optionApi.list = () => {
  return service({
    url: `${baseUrl}/comment`,
    method: 'get'
  })
}

export default optionApi
