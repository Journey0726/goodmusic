<template>
  <div id='list'>
      <div class="songs">
        <div class="back">
            <p class="back1" @click="back">返回</p>
            <p @click="song" :class="{isShow:songIsShow}">歌曲</p>
            <p @click="mv" :class="{isShow:!songIsShow}">MV</p>
        </div>
        
            <!-- 歌曲列表 -->
        <div class="item" v-show="songIsShow" 
        v-for="(item,index) in musicsList" 
        :class="{isAcitve:currentId == item.id}"
        @click="choiceId(item,index)">
        <img v-if="currentId === item.id" class="songImg" src="@/assets/img/duringPlay.svg" alt="">
        <img v-else class="songImg" src="@/assets/img/beforePlay.svg" alt="">
           
           <span class="span">{{item.name}}</span> 
            <i class="theSonger" v-for="items in  item.artists">{{items.name + ' '}}</i>
            </div>
            <!-- 更新当前歌曲id -->
            <div>{{updateID}}</div>
        </div>
        <div class="mv" v-show='!songIsShow'>
            <!-- MV列表 -->
        <div class="mvItem" v-for="item in mvList" @click="mvClick(item.id)">
            <img :src="item.cover" alt="" class="mvImg">
            <i class="name">{{ item.name }}</i>
        </div>
        </div>
        <div class="video"  v-if="mvIsShow">
             <mv class="mvVideo" :mvURL = 'mvURL'></mv>
            <div class="mask" @click="hide"></div>
        </div>
        
  </div>
</template>

<script>
import {getMvAddress} from '@/network/getMv.js'
import mv from '@/views/mv.vue'
export default {
    name:'showMusicList',
    components:{
        mv
    },
    props:{
        musicsList:{
            type:Array,
            default:[]
        },
        mvList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{ 
            currentId:null,
            mvURL:'',
            songIsShow:true,
            mvIsShow:false
        }
    },
    computed:{
        updateID(){
            this.currentId = this.$store.state.currentId
        }
    },
    methods:{
        choiceId(item,index){
            this.$store.commit('addMusic',item)
            this.$store.commit('changeId',item.id)
        },
        mvClick(id){
            getMvAddress(id).then(res=>{
               this.mvURL = res.data.data.url
               this.mvIsShow = true
            })
        },
        song(){
            this.songIsShow = true
        },
        mv(){
            this.songIsShow = false
        },
        back(){
            this.$emit('back')
        },
        hide(){
            this.mvIsShow = false
        }
  
    }

}
</script>

<style scoped>
    #list {
        display: flex;  
    }
    .song{
        flex-direction: column;
    }
    .item {
        width: 995px;
        border-bottom: 1px solid ;
        font-size: 10px;
        height: 25px;
        line-height: 25px;
        padding: 3px;
        cursor: pointer;
    }
    .item:hover,.item .span:hover{
        text-decoration: underline;
    }
    .span{
        padding-left: 5px;
        display: inline-block;
        width: 700px;
    }
    .theSonger{
        position: relative;
        
    }
    .songImg{
        height: 10px;
        margin-top: 5px;
    }
    .isAcitve{
        background-color: rgba(2, 15, 20, 0.726);
        color: #fff;
    }
    .back{
        font-size: 10px;
        width: 991px;
        padding: 5px;
        color: #fff;
        display: inline-flex;
        background-color:rgb(192, 14, 12);
       
    }
    .back1{
         cursor: pointer;
         display: inline;
    }
    .back p{
        margin-right: 280px;
        cursor: pointer;
        width: 50px;
        height: 20px;
        text-align: center;
    }
    .mvImg{
        width: 100px;
        padding: 20px;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .mvItem {
        display: inline-block;
        width: 130px;
    }


.name {
  display: inline-block;
  margin-left: 25px;
  width: 100px;
  font-size: 10px;
  height: 50px;
  /* flex-wrap: wrap; */
}
.isShow{
    box-shadow:  5px 5px 5px;
}

    .mvVideo{
    position: fixed;
     top: 0;
    left: 0;
    right: 0;
     bottom: 0;
     margin: auto;
}
.mask{
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>