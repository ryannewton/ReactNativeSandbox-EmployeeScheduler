'use strict';

// Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

//Import components, actions/reducers, and styles
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
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

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>

				<CardSection>
					<Button
						onPress={this.onButtonPress.bind(this)}
					>
						Login
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
	const { email, password, error } = state.auth;
	return { email, password, error };
};

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);
