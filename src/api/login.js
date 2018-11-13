import {api, instance} from './common'

const login = (params)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.login,
      method: 'post',
      data: params
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const logout = ()=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.logout,
      method: 'post'
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  login,
  logout
}