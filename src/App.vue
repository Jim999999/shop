<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/about">我的</van-tabbar-item>
    </van-tabbar>


   <!--  <router-view/>
     <ul class="foot-bar">
      <li class="foot-bar-item"><router-link to='/'>首页</router-link></li>
      <li class="foot-bar-item"><router-link to='/category'>分类</router-link></li>
      <li class="foot-bar-item"><router-link to='/cart'>购物车</router-link></li>
      <li class="foot-bar-item"><router-link to='/about'>我的</router-link></li>
    </ul> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    }
  }

</script>>

<style>

/* 弹性盒子
.foot-bar{
  display: flex;
  background: #cccccc;
  position: fixed;
  bottom: 0;  /* 贴近底部
  width: 100%;/* 设置宽厚，才能贴近底部 -- 文档流
  height: 1rem;
  line-height: 1.4rem;
}
.foot-bar >.foot-bar-item{
    flex-grow: 1;
    text-align: center;
  } */
</style>
