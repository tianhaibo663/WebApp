// 使用仓库
import Vue from 'vue';
import Vuex from 'vuex';
// 引入小仓库
import home from './home'
import search from './search'
// 需要使用插件
Vue.use(Vuex);
// // state:储存数据的地方
// const state = {};
// // mutations:修改数据的唯一手段
// const mutations = {};
// // action:处理action，可以书写自己的业务逻辑，也可以处理异步任务
// const actions = {};
// // getters:理解为结算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};

// 对外暴露一个store实例
export default new Vuex.Store({
    // state,
    // actions,
    // mutations,
    // getters,
    
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
    }
})