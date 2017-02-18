import React, { Component } from 'react';

import {
	Text,
	Button,
	View
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import {
	isLogin
} from '../../common/index';

export default class StartPage extends Component {
	
	constructor(props) {
		super(props);

		this.isLoginControl();
	}

	async isLoginControl() {
		var present = this;
		isLogin().then((res) => {
			if (res)
				Actions.MainPage({type: 'reset'});
			else 
				Actions.LoginPage({type: 'reset'});
		})
	}

	render() {
		return(
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Text>Yükleniyor..</Text>
			</View>
		);
	}
} 