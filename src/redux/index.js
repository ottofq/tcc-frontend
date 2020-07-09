import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlaware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReduce from './modules/rootReduce';
import rootSaga from './modules/rootSaga';

const sagaMiddlaware = createSagaMiddlaware();

const middlewares = [sagaMiddlaware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(rootReduce, enhancer);

sagaMiddlaware.run(rootSaga);

export default store;
