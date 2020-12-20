import {getMv} from './request.js'

export function getMvAddress(id){
    return getMv({
        url:'/mv/url',
        params:{
            id
        }
    })
}