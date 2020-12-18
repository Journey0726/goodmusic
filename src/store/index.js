import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
    {
    state:{
        playList:[],
        currentId:0
    },
    mutations:{
        addMusic(state,payload){
            if(!state.playList.includes(payload))
            state.playList.push(payload);
      
          
        },
        changeId(state,payload){
            state.currentId = payload
            // console.log(state.currentIndex);
        },
        clearList(state){
            state.playList = []
            state.currentId = 0
        }
    }
}
)
export default store