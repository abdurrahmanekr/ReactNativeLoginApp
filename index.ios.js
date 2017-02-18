import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import LoginPage from './src/pages/login-page/login-page';
import MainPage from './src/pages/main-page/main-page';
import StartPage from './src/pages/start-page/start-page';

export default class LoginApp extends Component {

	render() {
		const scenes = Actions.create(
		  <Scene key="root" hideNavBar={true}>
		    <Scene key="StartPage" component={StartPage}/>
		    <Scene key="LoginPage" component={LoginPage}/>
		    <Scene key="MainPage" component={MainPage}/>
		  </Scene>
		);

		return <Router scenes={scenes}/>
	}
}

AppRegistry.registerComponent('LoginApp', () => LoginApp);
