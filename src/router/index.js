import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Category from '../views/Category.vue'
let Home = ()=>import('../views/Home.vue');
let About = ()=>import('../views/About.vue');
let Category = ()=>import('../views/Category.vue');
import Cart from '../views/Cart.vue';
import FooterBbar from '@/components/FooterBar.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home,
    components:{
      default :Home,
      "footer-bar":FooterBbar
    },
    meta: {
      keepAlive :true,//该路由页面用缓存
    }
  },{
    path: '/category',//分类
    name: 'category',
    // component: Category,
     components:{
      default :Category,
      "footer-bar":FooterBbar
    },
    meta: {
      keepAlive :true,//该路由页面用缓存
    }
  },{
    path: '/cart',//购物车
    name: 'cart',
    // component: Cart,
    components:{
      default :Cart,
      "footer-bar":FooterBbar
    },
    meta: {
      keepAlive :false,//该路由页面不用缓存
    }
  },{
    path: '/about',//我的
    name: 'about',
    // component: About,
    components:{
      default :About,
      "footer-bar":FooterBbar 
    },
    meta: {
      keepAlive :true,
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  

]

const router = new VueRouter({
  routes
})

export default router
