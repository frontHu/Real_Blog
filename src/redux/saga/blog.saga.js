import { call, takeEvery, put } from 'redux-saga/effects'
import * as Types from './../actionType'
import * as APIS from './../../service/blog.service'

export const Type = 'BLOG'

function* blogSaga(params) {
  let res = yield call(APIS.getBlogList, params.payload)
  if(res.data.code === 200) {
    yield put({type: Types.BLOG_LIST, payload: res.data.content})
  }
}

export function* blogWatcher() {
  yield takeEvery(`${Type}_${Types.BLOG_LIST}`, blogSaga)
}