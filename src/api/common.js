import axios from "axios"

const api = {
  login: 'user/login',
  logout: 'user/logout',
  position: 'position/prev-id',
  address: 'address',
  user: 'user/info',
  gender: 'keyword/gender',
  category: 'product-category',
  hot: 'product/hot-key',
  search: 'product/search',
  recommend: 'product/recommending'
}

const instance = axios.create({
  baseURL: 'https://www.consolestack.com/api/dandelion/',
  withCredentials: true,
  timeout: 5000
})

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export {
  api,
  instance
}


