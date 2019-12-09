<template>
  <div class="about">
  <div class="nav-bar">
    <van-nav-bar title="分类"  />
  </div>
  <div class="category">
    <van-row>
      <van-col span="6" class="nav">
        <ul>
          <li :typeId="item.typeId" @click="selectCategory(item.typeId,index)" :class="{active:is_active === index}" v-for="(item,index) of types" :key="index">{{item.typeName}}
          </li>
        </ul>
      </van-col>
      <van-col span="18" class="container">
        <van-row>
          <ul class="item">
            <li class="item-li" v-for="(item , index) of categoryGoods" :key="index">
              <img :src="item.img" alt="">
              <p class="title">{{item.name}}</p>
              <p class="price">￥{{item.price}}</p>
            </li>
          </ul>
        </van-row>
      </van-col>
    </van-row>

  </div>
  
  </div>
</template>

<script>
// import url from '@/service.config.js';
import axios from 'axios';

export default {
  data() { 
    return {
     categoryGoods:[],
     is_active:0,
     types : [
          {
              "typeId": 1,
              "typeName": "拖拉机" 
          },{
              "typeId": 2,
              "typeName": "收割机" 
          },{
              "typeId": 3,
              "typeName": "打捆机" 
          },{
              "typeId": 4,
              "typeName": "脱粒机" 
          },{
              "typeId": 5,
              "typeName": "搅拌机" 
          },{
              "typeId": 6,
              "typeName": "播种机" 
          },{
              "typeId": 7,
              "typeName": "粉碎机" 
          },{
              "typeId": 8,
              "typeName": "烘干机" 
          }
      ],
    };
  },created() {
    //init
    this.categoryGoods = this.selectCategory(1,0);
     
  },
  methods:{
    // onClickLeft() {
    //   this.$router.go(-1);
    // },
    selectCategory(typeId,index){
      this.is_active = index;

      // console.log(typeId);
      axios({
        method: "post",
        url : '/getCategoryGoods',
        data : {typeId : typeId},
      }).then(res=>{
        // console.log(res);
        this.categoryGoods = res.data;
      }).catch(err=>{
        console.log(err);
      });
     

    },
  }
}
</script>
<style scoped>
.nav{
  background: #eee;
  position: fixed;
  top: 0.6rem;

}
.nav li {
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 1px solid #fff;
  padding: 3px;
  text-align: center;
}
.active {
  background: #fff;
}
.item{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
  margin-left: 1.6rem;
  width: 100%;
}
</style>