import axios from './httpconfig'

//评论提交
export function subComment(params) {
  return axios.post('/comment/sub', params)
}