<template>
  <div id='list'>
      <div class="back">
          <p class="back1" @click="back">返回</p>
      </div>
      <div class="item" 
      v-for="(item,index) in musicsList" 
      :class="{isAcitve:currentIndex == index}"
      @click="choiceId(item,index)">
      <img v-if="currentIndex === index" class="img" src="@/assets/img/duringPlay.svg" alt="">
      <img v-else class="img" src="@/assets/img/beforePlay.svg" alt="">
          {{item.name}}</div>
  </div>
</template>

<script>
export default {
    name:'showMusicList',
    props:{
        musicsList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            id:null,
            currentIndex:null,
        }
    },
    methods:{
        choiceId(item,index){
            this.id = item.id
            this.currentIndex = index
            this.$bus.$emit('theID',this.id)
            this.$store.commit('addMusic',item.id)
        },
        back(){
            this.$emit('back')
        }
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
    }
    .img{
        height: 10px;
        margin-top: 5px;
    }
    .isAcitve{
        background-color:rgb(11, 147, 238);
        color: #fff;
    }
    .back{
        font-size: 10px;
        padding: 5px;
        background-color:pink;
       
    }
    .back1{
         cursor: pointer;
         display: inline;
    }
</style>