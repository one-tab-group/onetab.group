import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'

axios.defaults.timeout = 90000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.withCredentials = true
axios.defaults.responseType = 'json'
// axios.defaults.baseURL = BASE_URL
// axios.defaults.baseURL = 'http://localhost:3088'

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.resolve(error.response)
  }
)

export type APIResponse<T> = {
  data: T
  error?: boolean
  message?: string
}

function request<T>(
  url: string,
  type: string,
  params: any
): Promise<APIResponse<T>> {
  const config = {
    method: type,
    url,
    params: type === 'get' ? params : null,
    data: params
  }
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response: AxiosResponse) => {
        const res: APIResponse<T> = {
          data: response.data,
          error: response.status !== 200,
          message: response.statusText
        }
        resolve(res)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}

export default {
  get: <T>(url: string, params?: any): Promise<APIResponse<T>> =>
    request(url, 'get', params),
  post: <T>(url: string, params?: any): Promise<APIResponse<T>> =>
    request(url, 'post', params),
  patch: <T>(url: string, params?: any): Promise<APIResponse<T>> =>
    request(url, 'patch', params),
  delete: <T>(url: string, params?: any): Promise<APIResponse<T>> =>
    request(url, 'delete', params)
}
