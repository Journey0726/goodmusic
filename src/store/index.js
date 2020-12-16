import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
    {
    state:{
        playList:[],
        currentIndex:0
    },
    mutations:{
        addMusic(state,payload){
            if(!state.playList.includes(payload))
            state.playList.push(payload);
          
        },
        changeIndex(state,payload){
            state.currentIndex = payload
        }
    }
}
)
export default store