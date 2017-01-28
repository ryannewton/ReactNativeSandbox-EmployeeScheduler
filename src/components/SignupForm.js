'use strict';

// Import Libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

//Import components, actions/reducers, and styles
import { Card, CardSection, Input, Button } from './common';
import {
	emailChanged,
	passwordChanged,
	passwordConfirmChange,
	signupUser
} from '../actions';

class SignupForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onPasswordConfirmChange(text) {
		this.props.passwordConfirmChange(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.signupUser({ email, password });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="joe@gmail.com"
						value={this.props.email}
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						value={this.props.password}
						onChangeText={this.onPasswordChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Confirm Password"
						placeholder="password"
						value={this.props.passwordConfirm}
						onChangeText={this.onPasswordConfirmChange.bind(this)}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>

				<CardSection>
					<Button
						onPress={this.onButtonPress.bind(this)}
					>
						Sign Up
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = (state) => {
	const { email, password, passwordConfirm, error } = state.auth;
	return {
		email,
		password,
		passwordConfirm,
		error
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	passwordConfirmChange,
	signupUser
})(SignupForm);
