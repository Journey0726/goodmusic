<template>
  <div class="list">
      <div class="length">播放列表({{list.length}})</div>
      <div v-for="item in list" class="item">{{item.name}}</div>
  </div>
</template>

<script>
export default {
    name:'listMusic',
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.list = this.$store.state.playList
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
</style>