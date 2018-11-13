import {api, instance} from './common'

const getGender = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.gender).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getGender
}