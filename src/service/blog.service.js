import aixos from './httpconfig'

//获取blog列表
export function getBlogList(params) {
  return aixos.post(`/blog/list`, params)
}