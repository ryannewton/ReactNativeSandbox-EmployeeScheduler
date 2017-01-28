'use strict';

// Import Libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class SignupForm extends Component {
	render() {
		return (
			<Text>Test</Text>
		);
	}
}

const mapStateToProps = (state) => {
	const { email, password, passwordConfirm } = state.auth;
	return {
		email,
		password,
		passwordConfirm
	};
};

export default connect(mapStateToProps)(SignupForm);
