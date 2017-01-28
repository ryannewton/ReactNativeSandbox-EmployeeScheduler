'use strict';

// Import libraries
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

//Import components, actions/reducers, and styles
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="login" component={LoginForm} title="Please Login" />
		</Router>
	);
};

export default RouterComponent;
