'use strict';

// Import libraries
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	PASSWORD_CONFIRM_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	SIGNUP_USER,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL
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
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch(loginUserSuccess(user));
				Actions.main();
			})
			.catch(() => dispatch(loginUserFail()));
	};
};

const loginUserSuccess = (user) => {
	return {
		type: LOGIN_USER_SUCCESS,
		payload: user
	};
};

const loginUserFail = () => {
	return { type: LOGIN_USER_FAIL };
};

export const signupUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: SIGNUP_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch(signupUserSuccess(user));
				Actions.main();
			})
			.catch(() => dispatch(signupUserFail('Email address is already in use')));
	};
};

const signupUserSuccess = (user) => {
	return {
		type: SIGNUP_USER_SUCCESS,
		payload: user
	};
};

export const signupUserFail = (err) => {
	return {
		type: SIGNUP_USER_FAIL,
		payload: err
	};
};
