import React from "react";

import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import LoginPage from "./src/pages/login-page/login-page";
import MainPage from "./src/pages/main-page/main-page";
import StartPage from "./src/pages/start-page/start-page";

export default class LoginApp extends React.Component {

	render() {
		const LoginApp = StackNavigator({
			StartPage: { screen: StartPage },
			MainPage: { screen: MainPage },
			LoginPage: { screen: LoginPage }
		});
		return (
			<LoginApp
				ref={nav => {
					this.navigator = nav;
				}}
			/>
		);
	}
}
AppRegistry.registerComponent("LoginApp", () => LoginApp);
