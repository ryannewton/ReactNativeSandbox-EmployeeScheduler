'use strict';

// Import libraries
import firebase from 'firebase';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	PASSWORD_CONFIRM_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
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
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => dispatch(loginUserSuccess(user)))
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
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => dispatch(signupUserSuccess(user)))
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
