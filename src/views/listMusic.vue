<template>
  <div class="list">
      <div class="length">播放列表({{list.length}})
          <span @click="clearList">清除</span>
      </div>
      <div v-for="(item,index) in list" class="item"
       @click="listClick(item,index)"
       :class="{isActive:currentId == item.id}">{{item.name}}</div>
       <!-- 实现播放列表新添加的music变成选定 -->
       <div>{{currentIdChange}}</div>
       <div>{{listChange}}</div>
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
    // mounted(){
    //     this.list = this.$store.state.playList   
    // },
    computed:{
        currentIdChange(){
            this.currentId = this.$store.state.currentId
        },
        listChange(){
             this.list = this.$store.state.playList
        }
    },
    methods:{
        listClick(item,index){
            this.currentId = item.id;
            //this.$emit('changeId',this.currentIndex)
            this.$store.commit('changeId',this.currentId)
        },
        clearList(){
            this.$store.commit('clearList')
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
        height: 20px;
        font-size: 10px;
        line-height: 20px;
        padding-left: 10px;
        cursor: pointer;
    }
    .item:hover{
        background-color:rgba(8, 5, 5, 0.753);
    }
    .length{
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
        background-color: rgb(28,28,28);
        color: #fff;
        border-bottom: 1px solid;
        font-size: 10px;
         white-space:nowrap;
    }
    .length span{
        position: relative;
        margin-left: 80px;
        cursor: pointer;     
       
    }
    .isActive{
        color: #fff;
        background-color: rgba(2, 15, 20, 0.726);
    }
</style>