import axios from './httpconfig'

//获取评论信息
export function getComment(params) {
  return axios.post('/comment/list', params)
}
//评论提交
export function subComment(params) {
  return axios.post('/comment/sub', params)
}