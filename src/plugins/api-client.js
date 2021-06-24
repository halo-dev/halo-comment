import Vue from 'vue'
import { ContentApiClient } from '@halo-dev/content-api'
import { HaloRestAPIClient } from '@halo-dev/rest-api-client'

const haloRestApiClient = new HaloRestAPIClient({
  baseUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8090'
})

Vue.prototype.$apiClient = new ContentApiClient(haloRestApiClient)
