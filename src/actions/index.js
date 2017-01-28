'use strict';

// Import libraries
import firebase from 'firebase';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	PASSWORD_CONFIRM_CHANGED,
	LOGIN_USER_SUCCESS,
	SIGNUP_USER_SUCCESS
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
			.then((user) => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
			});
	};
};

export const signupUser = ({ email, password }) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch({ type: SIGNUP_USER_SUCCESS, payload: user });
			});
	};
};
