<template>

  <div>
      <div class='title'>推荐歌单</div>
    
      <div v-for="item in recommend" class="recommendList">
          <img :src="item.picUrl" alt="" class="img">
          <!-- <p>{{item.name}}</p> -->
      </div>
  </div>
</template>

<script>

export default {
    name:'recommend',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.title{
    line-height: 30px;
    border-bottom: 1px solid red;
    height: 30px;
}
    .recommendList{
         display: inline-block; 
          
    }
   
    .img{
        width: 100px;
       padding: 20px;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>