import { combineReducers } from 'redux';

import current_time from './current_time';
import config from './config'

const rootReducer = combineReducers({current_time, config});

export default rootReducer;