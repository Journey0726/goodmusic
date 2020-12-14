<template>
  <div id="index">
    <input type="text" placeholder="请输入查询内容" v-model="keywords" @keyup.enter="getSearchInfo(keywords)">
    <showMusicList  :musicsList = 'musicsList' class="musicsList"></showMusicList>
    <player class="player"></player>
  </div>
</template>

<script>
import {getSearchInfo} from '@/network/search.js'
import player from '@/views/player.vue'
import showMusicList from "@/views/showMusicList.vue"
export default {
    name:"index",
    components:{
        player,
        showMusicList
    },
    data(){
     return {
        keywords:'',
        musicsList:[]
     }
    },
      methods:{
        getSearchInfo(info){
        getSearchInfo(info).then(res=>{
        // this.list = res.result.songs
        console.log(res.data.result.songs);
        this.musicsList = res.data.result.songs 
      })
    }
  }
}
</script>

<style scoped>

 .musicsList{
   width: 60%;
   display: flex;
   margin-left: 20%;
}
.player{
  display: flex;
  bottom: 0;
}
</style>