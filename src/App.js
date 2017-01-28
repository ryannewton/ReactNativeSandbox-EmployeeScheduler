'use strict';

// Import Libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
