<template>
  <div class="list">
      <div class="length">播放列表({{list.length}})</div>
      <div v-for="(item,index) in list" class="item"
       @click="listClick(index)"
       :class="{isActive:currentIndex == index}">{{item.name}}</div>
       <!-- 实现播放列表新添加的music变成选定 -->
       <div>{{currentIndexChange}}</div>
  </div>
</template>

<script>
export default {
    name:'listMusic',
    data(){
        return{
            list:[],
            currentIndex:0
        }
    },
    mounted(){
        this.list = this.$store.state.playList   
    },
    computed:{
        currentIndexChange(){
            this.currentIndex = this.list.length-1
        }
    },
    methods:{
        listClick(index){
            this.currentIndex = index;
            //this.$emit('changeId',this.currentIndex)
            this.$store.commit('changeIndex',this.currentIndex)
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