import * as Apis from './../../service/comment.service'

//获取评论列表action
export function getCommentList(params) {
  return (dispatch) => {
    return new Promise((reslove, reject) => {
      Apis.getComment(params).then(res => {
        reslove(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

//提交评论列表action
export function subComment(params) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Apis.subComment(params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}