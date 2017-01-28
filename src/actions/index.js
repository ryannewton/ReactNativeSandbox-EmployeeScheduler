'use strict';

// Import libraries
import firebase from 'firebase';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	PASSWORD_CONFIRM_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
};

export const passwordConfirmChange = (confirmPassword) => {
	return {
		type: PASSWORD_CONFIRM_CHANGED,
		payload: confirmPassword
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

export const signupUser = ({ email, password }) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => loginUserSuccess(dispatch, user));
	};
};
