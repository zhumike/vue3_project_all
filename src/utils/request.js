import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const http = axios.create({
  baseURL: "https://v3pz.itndedu.com/v3pz",
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如设置token
    const token = localStorage.getItem("pz_token"); // 获取token
    const whiteUrl = ['/get/code', '/user/authentication', '/login'];

    if (token &&!whiteUrl.includes(config.url)) {
      config.headers["x-token"] = token; // 设置请求头
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);


// 添加请求拦截器
// axios.interceptors.request.use(
//   function (config) {
//     // 在发送请求之前做些什么
//     const token = localStorage.getItem('pz_token')
//     console.log(token,'*****这是用户token*****')

//     // 不需要添加token的api，会做一层判断
//     const whiteUrl = ['/get/code', '/user/authentication', '/login'];
//     if (token &&!whiteUrl.includes(config.url)) {
//       config.headers['x-token'] = token;
//     }
//     return config;
//   },
//   function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 接口返回异常码，提示用户
    if (response.data.code === -1) {
      ElMessage.warning(response.data.message);
    }

    // 针对token信息过期情况
    if (response.data.code === -2) {
      localStorage.removeItem("pz_token");
      localStorage.removeItem("pz_userInfo");
      window.location.href = window.location.origin;
    }

    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default http;
