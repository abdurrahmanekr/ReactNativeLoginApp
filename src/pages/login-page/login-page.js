import React, { Component } from 'react';

import {
	Text,
	View,
	TextInput,
	Button,
	Alert
} from 'react-native';

import { NavigationActions } from "react-navigation";

import {
	serializeKey,
	setSessionTicket
} from '../../common/index';

export default class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			userPassword: ""
		};
	}

	goLogin() {
		// ajax il kontrol
		var name = this.state.userName;
		var pass = this.state.userPassword;
		var self = this;
		if (name == "" || pass == "") {
			Alert.alert("Boş bırakamazsınız");
		} else {
			fetch('http://192.168.1.102/index.php', {
				method: "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: serializeKey({
					userName: name,
					userPassword: pass
				})
			})
			.then((res) => res.json())
			.then((res) => {
				if (res.session_ticket)
					setSessionTicket(String(res.session_ticket));

				if (res.result != -1)
					self.props.navigation.navigate('MainPage');
				else
					Alert.alert("Kullanıcı doğrulanamadı");
			})
			.catch((err) => {
				Alert.alert("Bur sorun oluştu " + err);
			})
		}
	}

	render() {
		return(
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					padding: 15
				}}>
				<View>
					<TextInput
						style={{
							height: 50
						}}
						value={this.state.userName}
						onChangeText={(value) => this.setState({userName: value})}
						placeholder="Kullanıcı adı"/>
				</View>
				<View>
					<TextInput
						style={{
							height: 50
						}}
						onChangeText={(value) => this.setState({userPassword: value})}
						value={this.state.userPassword}
						placeholder="Şifre"/>
				</View>
				<View
					style={{
						height: 50
					}}>
					<Button
						title="Giriş" // butonun yazısı
						color="#4285f4" // arkaplan rengi
						onPress={this.goLogin.bind(this)} /* butona tıklandığında tetiklenecek fonksiyon*/ />
				</View>
			</View>
		);
	}
}
