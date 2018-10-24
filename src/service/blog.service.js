import axios from './httpconfig'

//获取blog列表
export function getBlogList(params) {
  return axios.post(`/api/blog/list`, params)
}

//获取blog文章
export function getBlogDetail(id) {
  return axios.get(`/api/blog/detail?id=${id}`)
}