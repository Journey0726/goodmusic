<template>
    <audio class="player" :src="'https://music.163.com/song/media/outer/url?id='+ playList[playList.length-1]+'.mp3'" 
     controls="controls" autoplay="autoplay"></audio>

    
</template>

<script>
export default {
name:'player',

data(){
    return {
        id:null,
        playList:[]
    }
},
mounted(){
    this.$bus.$on('theID',(msg)=>{
        this.id = msg
        this.playList  = this.$store.state.playList
    })
}
}
</script>

<style scoped>
 
</style>