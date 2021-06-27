import { ContentApiClient, HaloRestAPIClient } from '@halo-dev/content-api'

const haloRestApiClient = new HaloRestAPIClient({
  baseUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8090'
})

const apiClient = new ContentApiClient(haloRestApiClient)

export default apiClient
