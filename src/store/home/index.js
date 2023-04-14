// 引入API模块获取数据
import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
// home模块的数据仓库
const state = {
    // state中的数据默认初始类型根据服务器中的类型设定
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    CATAGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATAGORYLIST', result.data);
        }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data);
        }
    },
    // 获取底部floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data);
        }
    },

};
const getters = {};

// 对外暴露一个store实例
export default {
    state,
    actions,
    mutations,
    getters
}