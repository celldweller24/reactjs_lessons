import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './components/store/reducers';

const preloadedState = {};
if (typeof (window) !== 'undefined') {
  // Grab the state from a global variable injected into the server-generated HTML
  const preloadedState = window.__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
const persistor = persistStore(store);

export { store, persistor };
