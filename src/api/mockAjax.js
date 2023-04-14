// 对axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

const requests = axios.create({
    // 基础路径
    baseURL:"/mock",
    // 请求超时
    timeout:5000,
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nProgress.start();
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调
    // 进度条结束
    nProgress.done();
    return res.data;
},(err)=>{
    // 失败的回调
    return Promise.reject(new Error('error'));
})

// 暴露
export default requests;