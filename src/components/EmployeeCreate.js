'use strict';

// Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Import components
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
					/>
				</CardSection>
				
				<CardSection>
					<Input
						label="phone"
						placeholder="555-555-5555"
					/>
				</CardSection>
				
				<CardSection>
				</CardSection>
				
				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeCreate;
