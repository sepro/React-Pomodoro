import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index.js';

const defaultState = {current_time: 1500000};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export default store;
