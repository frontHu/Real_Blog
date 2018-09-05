import { call, takeEvery } from 'redux-saga'
import * as Types from './../actionType'
import * as APIS from './../../service/blog.service'

export const Type = 'BLOG'

function* blogSaga(params) {
  let res = yield call(APIS.getBlogList, params)
}

export function* blogWatcher() {
  yield takeEvery(`${Type}_${Types.BLOG_LIST}`, blogSaga)
}