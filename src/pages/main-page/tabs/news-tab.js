import React, { Component } from 'react';

import {
	Text,
	View,
	TouchableOpacity,
	Alert
} from 'react-native';

export default class NewsTab extends Component {

	tiklandi() {
		Alert.alert("tıklandı");
	}

	render() {
		return (
			<View>
				<Text>Selam burası haber kaynağı</Text>
				<TouchableOpacity
					onPress={this.tiklandi}>
					<Text>tıkla</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
