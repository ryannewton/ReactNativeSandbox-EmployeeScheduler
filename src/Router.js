'use strict';

// Import libraries
import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

//Import components, actions/reducers, and styles
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router sceneStyle={styles.sceneStyle}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>

			<Scene key="main">
				<Scene key="employeeList" component={EmployeeList} title="Employees" />
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
