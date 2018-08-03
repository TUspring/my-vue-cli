// import axios from 'axios'
// import store from './store/'
// import router from './config/routes'
// import { USER_SIGNOUT } from 'store/user'

import Qs from 'qs'
export default {
  baseURL: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  params: {},
  timeout: 20000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 2000,
  validateStatus: status => status >= 200 && status < 300,
  maxRedirects: 5,
  transformRequest: [data => Qs.stringify(data, { arrayFormat: 'indices' })],
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'indices' }),
}
