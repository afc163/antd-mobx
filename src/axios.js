import axios from 'axios';

import { message } from 'antd';

axios.interceptors.request.use(config => {
  config.url = `/server${config.url}`;
  return config;
}, error => {
  message.error('请求错误');
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  if (response.data.code === 10010 || response.data.data === 'TOKEN_INVALID') {
    message.config({
      maxCount: 1
    });
    message.info('登录已过期，请重新登录');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  }
  
  return response;
}, error => {
  // alert('服务器错误');
  return Promise.reject(error.response);
});

export default axios;
