import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8088', // 设置API的基础URL
    baseURL: process.env.VUE_APP_BLOG_BACKEND, // 设置API的基础URL
    timeout: 10000, // 设置请求超时时间
  });
  
  // 请求拦截器
  axiosInstance.interceptors.request.use(
    (config) => {
      // 在请求发送之前可以在这里进行一些操作，例如添加请求头
      // config.headers['Authorization'] = 'Bearer ' + authToken;
      console.log("config",config)
      console.log("process.env.VUE_APP_BLOG_BACKEND",process.env.VUE_APP_BLOG_BACKEND)
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // 响应拦截器
  axiosInstance.interceptors.response.use(
    (response) => {
      // 在收到响应后可以在这里进行一些操作，例如处理响应数据
      return response.data;
    },
    (error) => {
      // 处理响应错误
      return Promise.reject(error);
    }
  );
  
export default () => axiosInstance // 导出axios实例