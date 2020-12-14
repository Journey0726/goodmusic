<template>
  <div id='list'>
      <div class="item" v-for="(item,index) in musicsList" @click="choiceId(item)">{{item.name}}</div>
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
            id:null
        }
    },
    methods:{
        choiceId(item){
            this.id = item.id
            this.$bus.$emit('theID',this.id)
            // console.log(111);
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
        border: 1px solid ;
        border-radius: 2px;
        font-size: 15px;
    }
</style>