<template>
  <div id="index">
    <div class="header">
      <h2 class="title">GoodMusic</h2>
    <input type="text" placeholder="请输入查询内容" v-model="keywords" @keyup.enter="getSearchInfo(keywords)" class="input">
    </div>
    
    <recommend v-if="!isSearch" :recommend='recommend' class="recommend"></recommend>
    <showMusicList v-else :musicsList = 'musicsList' class="musicsList" @back = 'back'></showMusicList>
    <div class="empty"></div>
    <player class="player"></player>
  </div>
</template>

<script>
import {getSearchInfo} from '@/network/search.js'
import {getRecommendInfo} from '@/network/recomSongList.js'
import player from '@/views/player.vue'
import recommend from '@/views/recommend.vue'
import showMusicList from "@/views/showMusicList.vue"
export default {
    name:"index",
    components:{
        player,
        showMusicList,
        recommend
    },
    data(){
     return {
        keywords:'',
        musicsList:[],
        recommend:[],
        isSearch:false
     }
    },
    created(){
      this.recomSongList(14)
    },
      methods:{
        getSearchInfo(info){
        getSearchInfo(info).then(res=>{
        // this.list = res.result.songs
        console.log(res.data.result.songs);
        this.musicsList = res.data.result.songs 
        //  this.$router.push('/search')
        this.isSearch = true
      })
    },
    recomSongList(limit){
      getRecommendInfo(limit).then(res=>{
       this.recommend = res.data.result
       console.log( res.data.result);
      })
    },
    back(){
      this.isSearch = false
    }
  }
}
</script>

<style scoped>
  #index{
    background-color: rgba(235, 235, 235, 0.123);
  }
  .header{
    display: flex;
    background-color: rgb(36,36,36);
  }
    .input{
    width: 100px;
    height: 15px;
    align-self: center;
    border-radius: 15px;
    outline-style:none
  }
  ::-webkit-input-placeholder{
    font-size: 5px;
  }
  
  .title{
    width:200px;
    margin-left: 300px;
    flex: 0.6;
    color: #fff;
  }
 .musicsList{
   width:1000px;
   display: flex;
   margin-left: 20%;
   background-color: rgb(255, 255, 255);
   box-shadow: -1px 1px 2px;
   flex-wrap: wrap;
}
  .recommend{
     width:1000px;
  
   margin-left: 20%;
   background-color: rgb(255, 255, 255);
   box-shadow: -1px 1px 2px;
  }

.player{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 40px;
}
 .player::after{
        content: '';
        height: 100px;
        width: 100px;
        background:url('http://p1.music.126.net/Qi10RrYgTTwtqLIijQwstw==/109951165543037780.jpg');
        background-size: contain;
        z-index: 10;
        position: absolute;
        top: 400px;
        right: 400px;
    }
  .empty{
 
    height: 100px;
  }
</style>