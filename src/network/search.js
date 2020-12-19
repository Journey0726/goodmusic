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