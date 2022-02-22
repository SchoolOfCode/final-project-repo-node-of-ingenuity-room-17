import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TextInput,
	Button,
	KeyboardAvoidingView,
} from 'react-native';
import bgImage from '../assets/main-background.jpeg';

export default function Login() {
	return (
		<ImageBackground source={bgImage} style={styles.container}>
			{/* <Text>Open up App.js to start working on your app!</Text> */}
			<StatusBar color='white' style='light-content' />
			<View style={styles.overlay}>
				<View style={styles.header}>
					<Text style={styles.heading}>tribe.</Text>
					<Text style={styles.subHeading}>
						Your family, your rules.
					</Text>
				</View>
				<KeyboardAvoidingView behavior='padding' style={styles.authBox}>
					<TextInput
						style={styles.input}
						placeholder='youremail@email.com'
						placeholderTextColor={'black'}
					></TextInput>
					<TextInput
						style={[styles.input, styles.lastInput]}
						placeholder='password'
						placeholderTextColor={'black'}
						secureTextEntry
					></TextInput>
					<Button style={styles.btn} title='Login' color='white' />
					<Button title='Create Account' color='white' />
				</KeyboardAvoidingView>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
	},

	overlay: {
		flex: 1,
		justifyContent: 'space-between',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.4)',
		color: 'white',
		paddingTop: `35%`,
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 150,
		paddingBottom: 150,
	},

	heading: {
		fontSize: 64,
		fontWeight: 'bold',
		color: 'white',
	},
	subHeading: {
		fontSize: 24,
		color: 'white',
	},
	input: {
		width: '100%',
		height: 40,
		backgroundColor: 'white',
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 15,
	},

	lastInput: {
		marginBottom: 20,
	},
});
