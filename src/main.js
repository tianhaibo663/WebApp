import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
// 引入仓库
import store from '@/store';
// 引入mock数据
import '@/mock/mockServe';
// 引入swiper包的样式
import "swiper/css/swiper.css";
// 注册轮播图组件
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';

// 注册全局组件，第一个参数是全局组件的名字，第二个参数是哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store,
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },

}).$mount('#app')
