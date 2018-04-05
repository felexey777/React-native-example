import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  persistCombineReducers,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformer
} from 'redux-persist-seamless-immutable';
import mySaga from '../Sagas';
import { userReducer } from './UserRedux';
import { settingReducer } from './SettingRedux';
import { sseChannelReducer } from './SseChannelRedux';
import { navReducer } from './NavigationRedux';


export default () => {
  const config = {
    transforms: [seamlessImmutableTransformer],
    stateReconciler: seamlessImmutableReconciler,
    key: 'root',
    storage,
    whitelist: ['setting'],
 };
  /* ------------- Assemble The Reducers ------------- */
  const persistedReducer = persistCombineReducers(config, {
    nav: navReducer,
    user: userReducer,
    setting: settingReducer,
    sseChannel: sseChannelReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(mySaga);
  return { persistor, store };
};
