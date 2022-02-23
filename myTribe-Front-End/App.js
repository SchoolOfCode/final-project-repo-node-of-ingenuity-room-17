import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Family from './screens/Family';

export default function App() {
	return <Family />;
}

const styles = StyleSheet.create({
	mainView: {
		height: '100%',
		width: '100%',
	},
});
