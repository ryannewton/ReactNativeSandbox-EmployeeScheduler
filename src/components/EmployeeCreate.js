'use strict';

// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import components and action creators
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
		onButtonPress() {
			const { name, phone, shift } = this.props;

			// shift defaults to Monday since this is how picker initially renders
			this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
		}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
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

export default connect(mapStateToProps, {
	employeeUpdate, employeeCreate
})(EmployeeCreate);
