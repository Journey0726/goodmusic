import {request} from './request.js'

export function getSearchInfo(keywords,type){
    return request({
        url:'/search',
        params:{
            keywords,
            type
        }
    })
}
export function getMvInfo(keywords,type=1004){
    return request({
        url:'/search',
        params:{
            keywords,
            type
        }
    })
}