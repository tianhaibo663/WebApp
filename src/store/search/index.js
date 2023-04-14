import {reqGetSearchInfo} from '@/api';
// search模块的数据仓库
const state = {
    searchList:{},
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    // 获取search的列表数据
    async getSearchList({commit},params={}){
        let result = await reqGetSearchInfo(params);
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};
// 为了简化数据而生
const getters = {
    goodsList(state){
        return state.searchList.goodsList || {};
    },
    trademarkList(state){
        return state.searchList.trademarkList || {};
    },
    attrsList(state){
        return state.searchList.attrsList || {};
    },
};

// 对外暴露一个store实例
export default {
    state,
    actions,
    mutations,
    getters
}