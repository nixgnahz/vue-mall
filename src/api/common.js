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
  withCredentials: true
})

export {
  api,
  instance
}


