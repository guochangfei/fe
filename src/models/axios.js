import Vue from "vue";
import axios from "axios";

Vue.axios = Vue.prototype.axios = axios;
axios.defaults.headers.post["Content-Type"] = "application/json";

/**
 * 配置 axios
 */
// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        error
        // console.error(error);
    }
);

export default axios;