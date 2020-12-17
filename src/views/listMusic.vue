<template>
  <div class="list">
      <div class="length">播放列表({{list.length}})</div>
      <div v-for="(item,index) in list" class="item"
       @click="listClick(item,index)"
       :class="{isActive:currentId == item.id}">{{item.name}}</div>
       <!-- 实现播放列表新添加的music变成选定 -->
       <div>{{currentIdChange}}</div>
  </div>
</template>

<script>
export default {
    name:'listMusic',
    data(){
        return{
            list:[],
            currentId:0
        }
    },
    mounted(){
        this.list = this.$store.state.playList   
    },
    computed:{
        currentIdChange(){
            this.currentId = this.$store.state.currentId
        }
    },
    methods:{
        listClick(item,index){
            this.currentId = item.id;
            //this.$emit('changeId',this.currentIndex)
            this.$store.commit('changeId',this.currentId)
        }
    }
}
</script>

<style scoped>
    .list{
       position: relative;
       height: 250px;
       border: 1px solid;
        width: 200px;
        background-color: #fff;
    }
    .item{
        border-bottom: 1px solid;
    }
    .length{
         border-bottom: 1px solid;
    }
    .isActive{
        background-color: red;
    }
</style>