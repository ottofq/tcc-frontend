import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlaware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReduce from './modules/rootReduce';
import rootSaga from './modules/rootSaga';

const sagaMiddlaware = createSagaMiddlaware();

const middlewares = [sagaMiddlaware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const persistConfig = {
  key: '@app-ru',
  storage,
  whitelist: ['auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReduce);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddlaware.run(rootSaga);

export { store, persistor };
