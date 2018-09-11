import axios from './httpconfig'

//获取blog列表
export function getBlogList(params) {
  return axios.post(`/blog/list`, params)
}

//获取blog文章
export function getBlogDetail(id) {
  return axios.get(`/blog/detail?id=${id}`)
}