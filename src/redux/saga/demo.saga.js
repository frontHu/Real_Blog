import { call, put, takeEvery, take } from 'redux-saga/effects'

export function* demoeSage() {
  yield call(demoSaga2)
  console.log('Hello Sagas!')
}

export function* demoSaga2() {
  console.log('Hello Sagas!22')
}

// export function* demoWatcher() {
//   yield take(demoSaga2)
//   yield takeEvery(demoeSage)
// }