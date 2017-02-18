import {
	AsyncStorage
} from 'react-native';

export function serializeKey(data) {
	var formBody = [];
	for (var property in data) {
	  var encodedKey = encodeURIComponent(property);
	  var encodedValue = encodeURIComponent(data[property]);
	  formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");
	return formBody;
}

export async function isLogin() {
	var session = await AsyncStorage.getItem("session_ticket");
	if (session != null)
		return true;
	return false;
}

export async function setSessionTicket(ticket) {
	AsyncStorage.setItem("session_ticket", ticket);
}