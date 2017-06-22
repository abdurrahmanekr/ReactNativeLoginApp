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

import SqlService from '../../providers/SqlService';

export default class StartPage extends Component {

	constructor(props) {
		super(props);

		this.isLoginControl();
		SqlService.query("CREATE TABLE IF NOT EXISTS TEST (id TEXT)").then(res => {
	  		SqlService.insert("TEST", ["id"], ["1"]).then(res =>  {
	  			SqlService.select("TEST", "*").then(res =>  {})
	  		})
	  	})
	}

	async isLoginControl() {
		var self = this;
		isLogin().then((res) => {
			if (res)
				self.props.navigation.navigate('MainPage');
			else
				self.props.navigation.navigate('LoginPage');
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
