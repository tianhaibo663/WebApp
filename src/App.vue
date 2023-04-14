<template>
  <div>
    <Header></Header>

    <!-- 路由组件的容器 -->
    <router-view></router-view>
    
    <!-- 在Home、Search页面下显示，在登录和注册时隐藏 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <!-- 使用路由元信息判断是否显示footer -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入组件
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    Footer,
  },
  mounted(){
    // 通知Vuex发送请求，获取数据存储与仓库中
    this.$store.dispatch("categoryList");
  },
  
}
</script>

<style>

</style>
