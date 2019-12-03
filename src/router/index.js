import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/category',//分类
    name: 'category',
    component: Category
  },{
    path: '/cart',//购物车
    name: 'cart',
    component: Cart
  },{
    path: '/about',//我的
    name: 'about',
    component: About
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
