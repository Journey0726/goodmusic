import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Recommend = ()=>import('@/views/recommend.vue')
const showMusicList = ()=>import('@/views/showMusicList.vue')
const routes = [
    {
        path:'/recommend',
        component:Recommend
    },
    {
        path:'/search',
        component:showMusicList
    }
]
const router = new VueRouter({
    routes
})
export default router