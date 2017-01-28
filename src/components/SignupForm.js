'use strict';

// Import Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import components, actions/reducers, and styles
import { Card, CardSection, Input, Button } from './common';

class SignupForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="joe@gmail.com"
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						value={this.props.password}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Confirm Password"
						placeholder="password"
						value={this.props.passwordConfirm}
					/>
				</CardSection>

				<CardSection>
					<Button>
						Sign Up
					</Button>
				</CardSection>
			</Card>
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
