import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import AddChores from './screens/AddChores';

export default function App() {
	return <AddChores />;
}

const styles = StyleSheet.create({
	mainView: {
		height: '100%',
		width: '100%',
	},
});
