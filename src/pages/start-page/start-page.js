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
	  			debugger;
	  			SqlService.select("TEST", "*").then(res =>  {
		  			debugger;
		  		})
	  		})
	  	})
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
