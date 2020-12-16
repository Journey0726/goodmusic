<template>
    <div id='player'>
        <audio class="player" :src="'https://music.163.com/song/media/outer/url?id='+ playList[currentIndex].id+'.mp3'" 
        controls="controls" autoplay="autoplay"></audio>
        <div @click="isShow">
            <img class="listImg" src="@/assets/img/list.svg" alt="">
        </div>
        <listMusic v-show="isshow" class="list" ></listMusic>
        <div>{{listenChange}}</div>
    </div>
    
</template>

<script>
import listMusic from './listMusic'
export default {
name:'player',
components:{
    listMusic
},
data(){
    return {
        id:null,
        playList:[],
        isshow:false,
        currentIndex:0
    }
},
computed:{
    listenChange(){
        this.currentIndex = this.currentIndex = this.$store.state.currentIndex
    }
},
mounted(){
    this.$bus.$on('theID',(msg)=>{
        this.id = msg   
    });
    this.playList  = this.$store.state.playList
    

},
methods:{
    isShow(){
        this.isshow = !this.isshow
    },
    // changeId(index){
    //     this.currentIndex = index;
    // }
}
}
</script>

<style scoped>
#player{
    display: flex;
    justify-content: center;
    background-color: #eee;
}
.player{
    width: 1000px;
    align-items: center;
}
.listImg{
    width: 30px;
    background:#eee;   
    cursor: pointer;
    border-radius: 5px;
}
.list{
    height: 250px;
    position: flex;
    bottom: 160px;
    right: 80px;
    overflow-y: auto;
}

</style>