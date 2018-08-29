import { fork, call, all  } from 'redux-saga/effects'
import {demoeSage, demoSaga2} from './demo.saga'

export default function* rootSaga() {
  yield all([
    demoeSage()
  ])
}