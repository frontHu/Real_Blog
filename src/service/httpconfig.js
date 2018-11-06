
import axios from "axios";

let origin = window.location.origin 
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? origin : origin + '/api'
//拦截请求
axios.interceptors.request.use(function(config) {
  return config
});

//拦截响应
axios.interceptors.response.use(function(config) {
  if(config.data.code === 200) {
    return config.data
  }
  return config
})

export default axios;