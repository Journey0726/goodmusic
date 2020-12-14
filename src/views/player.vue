<template>
    <audio :src="'https://music.163.com/song/media/outer/url?id='+ this.id +'.mp3'" 
     controls="controls" autoplay="autoplay"></audio>
</template>

<script>
export default {
name:'player',

data(){
    return {
        id:null,
    }
},
mounted(){
    this.$bus.$on('theID',(msg)=>{
        this.id = msg
        console.log(this.id);
    })
}
}
</script>

<style>

</style>