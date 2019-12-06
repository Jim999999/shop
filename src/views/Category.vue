<template>
  <div class="about">
  <div class="nav-bar">
    <van-nav-bar title="分类"  />
  </div>
  <div class="category">
    <van-row>
      <van-col span="6" class="nav" >
        <ul>
          <li @click="selectCategory(item.typeId,index)" :class="{active:is_active === index}" v-for="(item,index) of types" :key="index">{{item.typeName}}</li>
        </ul>
      </van-col>
      <van-col span="18" class="container"></van-col>
    </van-row>

  </div>
  
  </div>
</template>

<script>
export default {
  data() { 
    return {
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
  },methods:{
    // onClickLeft() {
    //   this.$router.go(-1);
    // },
    selectCategory(typeId,index){
      this.is_active = index;
    },
  }
}
</script>
<style scoped>
.nav{
  background: #eee;
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
</style>>