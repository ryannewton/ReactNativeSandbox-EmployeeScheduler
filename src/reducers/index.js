'use strict';

// Import Libraries
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
	auth: AuthReducer
});
