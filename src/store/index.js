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
            // else {
            //     let index;
            //     for( let ind in state.playList){
            //         if(state.playList[ind].id == payload.id)
            //         {index = ind;
            //         //console.log(index);
            //         store.commit('changeId',)
            //         // state.currentIndex = index;
            //        // console.log(state.currentIndex);
            //         break;}
            //     }
              
            // }
          
        },
        changeId(state,payload){
            state.currentId = payload
            // console.log(state.currentIndex);
        }
    }
}
)
export default store