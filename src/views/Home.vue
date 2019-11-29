<template>
 <div class="container">
   <!-- title-->
  <van-nav-bar title="首页" class="nav-title">
   <van-icon name="search" slot="left" size="0.35rem"></van-icon>
   <van-icon name="shopping-cart-o" slot="right"  size="0.35rem"></van-icon>
  </van-nav-bar>
  
  <!--轮播图 -->
  <div class="spw">
    <van-swipe :autoplay="3000" indicator-color="gray" >
      <van-swipe-item class="spw-item" v-for="(item,index) in cansolImages" :key="index">
            <img v-lazy="item.img" />
            <!-- <img :src="item.img" />  -->
      </van-swipe-item>
    </van-swipe>
  </div>

 <!-- 热门图 -->
 <div class="hot">
   <p class="hot-title">热门商品</p>
   <swiper class="hot-swiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in hotProducts" :key="index">
      <div class="hot-swiper-content">
        <img v-lazy="item.img" />
        <div class="van-multi-ellipsis--l2">{{item.name}}</div>
        <div>￥{{item.price}}</div>
      </div>
    </swiper-slide>
   </swiper>
  </div>

<!-- 推荐商品 -->
<div class="variety">
  <p class="variety-title">推荐商品</p>
  <ul>
    <li class="variety-item" v-for="(item ,index) in varietyItem" :key="index">
       <img v-lazy="item.img" alt="" />
       <!-- <img :src="item.img" alt="" /> -->
       <p>{{item.name}}</p>
       <p>￥{{item.price}}</p>
    </li>
  </ul> 
 </div>

</div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";//npm 安装该包
import axios from 'axios';
import url from  '@/service.config.js';


export default {
  data() {
    return {
      cansolImages:[
        {
          name : 'img1',
          img  : 'https://img.yzcdn.cn/vant/apple-1.jpg',
        },{
          name : 'img2',
          img  : 'https://img.yzcdn.cn/vant/apple-2.jpg',
        },{
          name : 'img3',
          img  : 'https://img.yzcdn.cn/vant/apple-3.jpg',
        },{
          name : 'img4',
          img  :'https://img.yzcdn.cn/vant/apple-4.jpg',
        },{
          name : 'img5',
          img  : 'https://img.yzcdn.cn/vant/apple-5.jpg',
        }
      ],
    
      hotProducts: [ // 热门商品
        {
          name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
          img:
            "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
          img:
            "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
          img:
            "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   高港区手扶车带动土豆收获机收山芋机器",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
            "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   厂家直销大型花生收获机 地下薯类挖收机",
          img:
            "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   地瓜土豆杀秧机",
          img:
            "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   地瓜杀秧机",
          img:
            "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   自走式大型花生去秧机 花生除秧自动装袋机",
          img:
            "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2582",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   高效省人工花生摘果机 全新多功能去秧机",
          img:
            "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2581",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   河北邢台花生摘果机 自动装袋脱果机图片",
          img:
            "http://img48.nongjx.com/2/20180715/636672620803202789496_198_170_5.jpg",
          price: "2580",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   大型花生收获机规格 链条式方便花生挖果机",
          img:
            "http://img47.nongjx.com/2/20180926/636735768787313154613_198_170_5.jpg",
          price: "3260",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   家用节能花生摘果机 自动装袋花生分离机",
          img:
            "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
          price: "3460",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   牵引式苞米杆打包机生产定制",
          img:
            "http://img67.nongjx.com/2/20170627/636341765014077992756_198_170_5.jpg",
          price: "面议",
          company: "  曲阜四达机械设备有限公",
          city: "济宁市"
        }],
      swiperOption: {//设置后，要在模板中标签引入
        slidesPerView: 3
      },
      varietyItem: [ // 推荐商品
        {
          name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
          img:
            "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
          img:
            "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
          img:
            "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   高港区手扶车带动土豆收获机收山芋机器",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
            "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   厂家直销大型花生收获机 地下薯类挖收机",
          img:
            "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   地瓜土豆杀秧机",
          img:
            "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   地瓜杀秧机",
          img:
            "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   自走式大型花生去秧机 花生除秧自动装袋机",
          img:
            "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2582",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   高效省人工花生摘果机 全新多功能去秧机",
          img:
            "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2581",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   河北邢台花生摘果机 自动装袋脱果机图片",
          img:
            "http://img48.nongjx.com/2/20180715/636672620803202789496_198_170_5.jpg",
          price: "2580",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   大型花生收获机规格 链条式方便花生挖果机",
          img:
            "http://img47.nongjx.com/2/20180926/636735768787313154613_198_170_5.jpg",
          price: "3260",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   家用节能花生摘果机 自动装袋花生分离机",
          img:
            "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
          price: "3460",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   牵引式苞米杆打包机生产定制",
          img:
            "http://img67.nongjx.com/2/20170627/636341765014077992756_198_170_5.jpg",
          price: "面议",
          company: "  曲阜四达机械设备有限公",
          city: "济宁市"
        }],
    
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created(){
    //热门商品
    var url1 =url.getHotgoods;
    axios.get(url1).then(res=>{
      console.log(res);
      this.hotProducts = res.data;
    });

    //获取推荐商品
    var url2 =url.getVarietyGoods;
    axios.get(url2).then(res=>{
      // console.log(res);
      this.varietyItem = res.data;
    });

    
  }

}


</script>

<style >
.nav-title{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 9999 !important;
}

.container{
  background: #eee;
}

.spw{
  height: 3rem;
}
.spw .spw-item img{
  width: 100%;
  height: 3rem;
}
/* body{
  height: 2000px;
} */

/** 热门商品 */
.hot{
  margin-top: 0.2rem;
  background: #fff;
}
.hot .hot-title{
  width: 100%;
  height: 0.5rem;
  padding-left: 0.2rem;
  line-height: 0.5rem;
  box-sizing: border-box;
}

.hot-swiper-content{
  width: 2rem;
  text-align: center;  
}
.hot-swiper-content img{
  width: 2rem;
  height: 2rem;
}

/* 推荐商品 */
.variety{
  margin-top: 0.2rem;
  background: #fff;
  text-align: center;
  margin-bottom: 1rem;
}

.variety-title{
  margin-left: 0.2rem;
  padding-top: 0.2rem;
}
.variety ul{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
}
.variety-item{
 flex-basis: 45%;
}
.variety-item img{
  height: 2rem;
  width: 2rem;
}
</style>