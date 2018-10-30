import {api, instance} from "./common"

const getHotSearch = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.hot).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const getSearchResult = (keyword)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.search + '/' + keyword,
      method: 'get'
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getHotSearch,
  getSearchResult
}