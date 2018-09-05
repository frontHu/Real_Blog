import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducer/rootReducer";
import rootSaga from '../saga/rootSaga';

const reducer = combineReducers(rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose( 
    applyMiddleware(
      thunk,
      sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
  )
)
sagaMiddleware.run(rootSaga);

export default store;