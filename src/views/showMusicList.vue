<template>
  <div id='list'>
      <div class="back">
          <p class="back1" @click="back">返回</p>
      </div>
      <!-- 歌曲列表 -->
      <div class="item" 
      v-for="(item,index) in musicsList" 
      :class="{isAcitve:currentId == item.id}"
      @click="choiceId(item,index)">
      <img v-if="currentId === item.id" class="img" src="@/assets/img/duringPlay.svg" alt="">
      <img v-else class="img" src="@/assets/img/beforePlay.svg" alt="">
          {{item.name}}</div>
          <!-- 更新当前歌曲id -->
          <div>{{updateID}}</div>
        <!-- MV列表 -->
        <div class="mvItem" v-for="item in mvList" @click="mvClick(item.id)">{{item.id}}</div>
        <mv :mvURL = 'mvURL'></mv>
  </div>
</template>

<script>
import {getMvAddress} from '@/network/getMv.js'
import mv from '@/views/mv.vue'
export default {
    name:'showMusicList',
    components:{
        mv
    },
    props:{
        musicsList:{
            type:Array,
            default:[]
        },
        mvList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{ 
            currentId:null,
            mvURL:''
        }
    },
    computed:{
        updateID(){
            this.currentId = this.$store.state.currentId
        }
    },
    methods:{
        choiceId(item,index){
            this.$store.commit('addMusic',item)
            this.$store.commit('changeId',item.id)
        },
        mvClick(id){
            getMvAddress(id).then(res=>{
               this.mvURL = res.data.data.url
            })
        },
        back(){
            this.$emit('back')
        },
  
    }

}
</script>

<style scoped>
    #list {
        display: flex;
        flex-direction: column;
        
    }
    .item {
        border-bottom: 1px solid ;
        font-size: 10px;
        height: 25px;
        line-height: 25px;
        padding: 3px;
        cursor: pointer;
    }
    .img{
        height: 10px;
        margin-top: 5px;
    }
    .isAcitve{
        background-color: rgba(2, 15, 20, 0.726);
        color: #fff;
    }
    .back{
        font-size: 10px;
        padding: 5px;
        color: #fff;
        background-color:rgb(192, 14, 12);
       
    }
    .back1{
         cursor: pointer;
         display: inline;
    }

</style>