import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
    {
    state:{
        playList:[]
    },
    mutations:{
        addMusic(state,payload){
            if(!state.playList.includes(payload))
            state.playList.push(payload)
        }
    }
}
)
export default store