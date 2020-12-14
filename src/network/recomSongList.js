import {request} from './request.js'

export function getRecommendInfo(limit){
    return request({
        url:'/personalized',
        params:{
            limit
        }
    })
}