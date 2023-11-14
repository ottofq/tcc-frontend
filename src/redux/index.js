import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddlaware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReduce from './modules/rootReduce';
import authReducer from './modules/auth/reducer';
import rootSaga from './modules/rootSaga';

const sagaMiddlaware = createSagaMiddlaware();

const middlewares = [sagaMiddlaware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const authPersistConfig = {
  key: '@app-ru/auth',
  storage,
  blacklist: ['loading'],
};

const persistConfig = {
  key: '@app-ru/root',
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  ...rootReduce,
  auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddlaware.run(rootSaga);

export { store, persistor };
