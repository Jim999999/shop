<template>
  <div class="about">
  <div class="nav-bar">
    <van-nav-bar title="" left-text="返回" left-arrow  @click-left="onClickLeft" />
  </div>
   <van-tabs v-model="active">
      <van-tab title="登录">
       <van-cell-group>
        <van-field v-model="loginName" required clearable label="用户名"  placeholder="请输入用名"/>
        <van-field v-model="loginPasswd" required clearable type="password" label="密码" placeholder="请输入密码"/>
       </van-cell-group>
       <div>
           <van-button type="primary" size="large" @click="login">登录</van-button>
       </div>
      </van-tab>

      <van-tab title="注册">
        <van-cell-group>
        <van-field v-model="registerName" required clearable label="用户名"  placeholder="请输入用名"/>
        <van-field v-model="registerPasswd" required clearable type="password" label="密码" placeholder="请输入密码"/>
        </van-cell-group>
       <div>
           <van-button type="primary"  size="large" @click="register">注册</van-button>
       </div>
      </van-tab>
    
  </van-tabs>
  </div>
</template>
<script>
import axios from 'axios';
import url from '@/service.config.js';

export default {
  data(){
    return {
      active: 0,

      loginName:'',
      loginPasswd:'',
      registerName:'',
      registerPasswd:'',
    }
  },
  methods: {
    onClickLeft() {
      // this.$router.push('/');
      this.$router.go(-1);
    },
    //登录
    login(){

      //检测输入框是否为空
      if(!this.checkInput(this.loginName,this.loginPasswd)){
        this.$toast.fail('请输入账号和密码');return false;
      }

       axios({
         url:url.userAdd,
         method:'post',
         data : {
           userName : this.loginName,
           password : this.loginPasswd,
         }

       }).then(res=>{
         console.log(res);
         if(res.data.code == 200){
            this.$toast.success('登录成功');
            return false;
         }
          this.$toast.fail('登录失败1!');
       }).catch(err=>{
          this.$toast.fail('登录失败2!');
          console.log(err);
       });

    },
    //注册
    register(){
     //检测输入框是否为空
      if(!this.checkInput(this.registerName,this.registerPasswd)){
        this.$toast.fail('请输入账号和密码');return false;
      }

       axios({
         url : url. userRegister ,
         method : 'post',
         data : {
           userName : this.registerName,
           password : this.registerPasswd,
         }
       }).then(res=>{
         console.log(res);
         if(res.data.code == 200){
           this.$toast.success('注册成功!');
           this.registerName = this.registerPasswd = '';
           return false;
         }
         this.$toast.fail('注册失败1！');
       }).catch(err=>{
         this.$toast.fail('注册失败2!');
         console.log(err);
       });
    },
    //检查输入框
    checkInput(arg1 ,arg2){
        if(arg1 == '' || arg2 == ''){
          return false;
        }
        return true ;
    }

    
  }
}
</script>
