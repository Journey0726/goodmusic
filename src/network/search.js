import {request} from './request.js'

export function getSearchInfo(keywords){
    return request({
        url:'/search',
        params:{
            keywords
        }
    })
}