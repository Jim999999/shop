import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './assets/js/rem.js'


//按需引入vant组件
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { TreeSelect } from 'vant';

//mockjs 测试数据
import './mock/mock.js';

Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(TreeSelect)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

