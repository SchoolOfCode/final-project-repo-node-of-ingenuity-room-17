import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import ChoresNavigator from './navigation/NavigationStack';

export default function App() {
	return <ChoresNavigator />;
}

const styles = StyleSheet.create({
	mainView: {
		height: '100%',
		width: '100%',
	},
});
