'use strict';

// Import Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

//Import components, actions/reducers, and styles
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import firebaseConfig from '../api_keys';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		return(
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
