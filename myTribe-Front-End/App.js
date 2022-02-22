import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Welcome from './screens/Welcome';
export default function App() {
	return <Welcome />;
}

const styles = StyleSheet.create({
	mainView: {
		height: '100%',
		width: '100%',
	},
});
