<template>
<div>
     <div class="title">热门歌手</div>
     <div v-for="(item,index) in theTopList" 
      :key='index' v-if='index<14' @click="searchSonger(item.name)"
      class="theTopList">
      <img :src="item.picUrl" alt="" class="img" />
      <i class="name">{{ item.name }}</i>
    </div>
</div>
</template>

<script>
export default {
    name:'topList',
    props:{
        theTopList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        searchSonger(name){
            this.$emit('searchSonger',name)
        }
    }
}
</script>

<style scoped>
.title {
  line-height: 30px;
  border-bottom: 1px solid red;
  height: 30px;
}
.theTopList {
  display: inline-block;
  width: 130px;
}

.img {
  width: 100px;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
    cursor: pointer;
}
.name {
  display: inline-block;
  margin-left: 25px;
  /* width: 100px; */
  font-size: 10px;
  margin-bottom: 20px;
  /* height: 50px; */
   cursor: pointer;
  /* flex-wrap: wrap; */
}
.name:hover{
    text-decoration:underline
}
</style>