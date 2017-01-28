'use strict';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	PASSWORD_CONFIRM_CHANGED,
	LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	confirmPassword: '',
	user: null
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case PASSWORD_CONFIRM_CHANGED:
			return { ...state, passwordConfirm: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};