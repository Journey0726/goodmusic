<template>
  <div id="app">
    <player></player>
    <button @click="getSearchInfo('许嵩')">dianwo </button>
  
  </div>
</template>

<script>

import {getSearchInfo} from '@/network/search.js'
import player from '@/views/player.vue'

export default {
  name: 'App',
  components: {
    player
  },
 
    Playerethods:{
    getSearchInfo(info){
      getSearchInfo(info).then(res=>{
        // this.list = res.result.songs
        console.log(res);
      })
    }
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
