import { all  } from 'redux-saga/effects'
import { blogWatcher } from './blog.saga'

export default function* rootSaga() {
  yield all([
    blogWatcher()
  ])
}