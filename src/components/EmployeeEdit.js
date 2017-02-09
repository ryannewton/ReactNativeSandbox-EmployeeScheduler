'use strict';

// Import Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import components
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		// To do: Update firebase DB with new data
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
