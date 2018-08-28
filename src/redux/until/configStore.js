import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as index from "./../reducer/index";

const rootReducer = combineReducers({
  ...index
});

const store = createStore(
  rootReducer,
  compose( 
    applyMiddleware(
      thunk, // 允许我们 dispatch() 函数
      // loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    ),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
  )
)

export default store;