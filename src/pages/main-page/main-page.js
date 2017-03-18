import React, { Component } from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import {
	Text,
	View,
	Alert
} from 'react-native';

import NewsTab from './tabs/news-tab';
import CustomTabBar from './tabs/custom-tab-bar';

export default class MainPage extends Component {

	constructor(props) {
	  	super(props);
	  	SqlService.query("SELECT * FROM TEST").then(res => {
	  		debugger;
	  	})
	}

	render() {
		return(
			<ScrollableTabView
				style={{
					marginTop: 30
				}}
				renderTabBar={() => <CustomTabBar/>}
				onChangeTab={() => {
					Alert.alert("Değişti")
				}}>
	      		<NewsTab tabLabel='ios-paper'/>
		      	<Text tabLabel='ios-person'>Burası profil</Text>
		    </ScrollableTabView>
		);
	}
}
