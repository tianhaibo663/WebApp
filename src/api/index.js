// 这个模块：对API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';

// 三级联动接口 发送axios请求，返回Promise对象
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'});
// 获取轮播图列表
export const reqGetBannerList = ()=> mockRequests({url:'/banner',method:'get'});
// 获取floor数据
export const reqFloorList = ()=> mockRequests({url:'/floor',method:'get'});
// 获取search模块的数据
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params});
