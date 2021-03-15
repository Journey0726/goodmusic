<template>
  <div>
    <div class="title">推荐歌单</div>

    <div v-for="item in recommend" class="recommendList">
      <img :src="item.picUrl" alt="" class="img" />
      <i class="name">{{ item.name }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.title {
  line-height: 30px;
  border-bottom: 1px solid red;
  height: 30px;
}
.recommendList {
  display: inline-block;
  width: 130px;
}

.img {
  width: 100px;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
}
.name {
  display: inline-block;
  margin-left: 25px;
  width: 100px;
  font-size: 10px;
  height: 50px;
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
  /* flex-wrap: wrap; */
}
</style>