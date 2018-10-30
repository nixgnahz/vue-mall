import {api, instance} from "./common"

const getPosition = (id)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.position + '/' + id,
      method: 'get'
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export default getPosition