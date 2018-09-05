import aixos from './httpconfig'
import axios from './httpconfig';

//获取blog列表
export function getBlogList(params) {
  axios.post(`/blog/list`, params)
}