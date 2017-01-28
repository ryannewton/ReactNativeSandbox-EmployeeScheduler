'use strict';

// Import libraries
import React, { Component } from 'react';

//Import components, actions/reducers, and styles
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="joe@gmail.com"
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
					/>
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
