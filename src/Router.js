'use strict';

// Import libraries
import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

//Import components, actions/reducers, and styles
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router sceneStyle={styles.sceneStyle}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>

			<Scene key="main">
				<Scene
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add"
					key="employeeList"
					component={EmployeeList}
					title="Employees"
					initial
				/>
				<Scene
					key="employeeCreate"
					component={EmployeeCreate}
					title="Create Employee"
				/>
			</Scene>
		</Router>
	);
};

const styles = {
	sceneStyle: {
		paddingTop: Platform.OS === 'android' ? 50 : 65
	}
};

export default RouterComponent;
