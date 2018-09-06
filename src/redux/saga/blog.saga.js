import { call, takeEvery, put } from 'redux-saga/effects'
import * as Types from './../actionType'
import * as APIS from './../../service/blog.service'

export const Type = 'BLOG'

function* blogSaga(data) {
  let { params, cb } = data.payload
  let res = yield call(APIS.getBlogList, params)
  if(res.data.code === 200) {
    cb && cb();
    yield put({type: Types.BLOG_LIST, payload: res.data.content})
  }
}

export function* blogWatcher() {
  yield takeEvery(`${Type}_${Types.BLOG_LIST}`, blogSaga)
}