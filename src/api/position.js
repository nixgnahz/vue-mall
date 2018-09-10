import {api, instance} from "./common"

const getPosition = (id)=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.position + '/' + id).then((res)=> {
        resolve(res)
    }).catch((error)=> {
        reject(error)
    })
  })
}

export default getPosition