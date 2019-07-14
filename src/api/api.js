// import axios from 'axios';
// import qs from 'qs';
// import router from '../router/index'

// axios初始化配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api/';
// axios.defaults.baseURL = '/';

// 请求状态拦截
axios.interceptors.request.use(
  (resquest) => {
    // console.log(resquest);
    // if (resquest.method === 'post' && resquest.headers.hasOwnProperty('Content-Type')) {
    //   // resquest.data = resquest.data
    //   console.log(qs.stringify(resquest.data));
    //   resquest.data = qs.stringify(resquest.data);
    // }
    return resquest;
  }, (error) => {
    console.log(error);
    return Promise.reject(error);
  });

// 返回状态拦截
axios.interceptors.response.use(
  response => {
    // console.log(response,'res');
    // alert(response+'res!!!!')

    // if (response.data.code === 401) {
    //
    // } else if (response.data.code === 403) {
    //
    // } else if (response.data.code === 9527) {
    //
    // }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          console.log(500);
      }
    }
    return Promise.reject(error.response);
  }
);

// post请求
const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// get请求
const get = (url, params) => {
  console.log(url);
  return new Promise((resolve, reject) => {
    axios.get(url, {params})
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  get,
  post
};
