import {request} from './request.js'

export function getTopListInfo(){
    return request({
        url:'/toplist/artist',
      
    })
}