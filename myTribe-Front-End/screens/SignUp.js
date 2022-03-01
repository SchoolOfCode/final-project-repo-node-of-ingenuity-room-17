import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	ScrollView,
	TextInput,
	Button,
	KeyboardAvoidingView,
	Dimensions,
} from 'react-native';
import { useState } from 'react';
import headerImage from '../assets/header-background.jpeg';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { addToDb } from '../firebase/firestore';
import authErrorCheck from '../utils/authErrorCheck';
import { DocumentReference } from 'firebase/firestore';
const screenHeight = Dimensions.get('window').height;

export default function SignUp(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignUp = () => {
		if (password === confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredentials) => {
					const user = userCredentials.user;
					const family = {
						uid: user.uid,
						members: [{ id: 1, name: name, isParent: true }],
					};
					addToDb(family).then((res) => {
						props.navigation.setParams({ routeName: 'Family' });
						props.navigation.navigate('Family', {
							family: family,
							docID: res,
						});
					});
				})
				.catch((error) => authErrorCheck(error, setError));
			return;
		}
		setError('The passwords must match.');
	};
	return (
		<KeyboardAvoidingView behavior='position' style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<ImageBackground
					resizeMode='cover'
					style={styles.header}
					source={headerImage}
				>
					<View style={styles.overlay}>
						<Text style={styles.heading}>Join our tribe.</Text>
						<Text style={styles.subHeading}>
							Start taking control of your household.
						</Text>
					</View>
				</ImageBackground>
				<View style={styles.registration}>
					<Text style={styles.sectionHeading}>Sign Up</Text>
					<Text style={styles.label}>Your name</Text>
					<TextInput
						onChangeText={(text) => {
							setName(text);
						}}
						style={styles.input}
					/>
					<Text style={styles.label}>Email</Text>
					<TextInput
						onChangeText={(text) => setEmail(text)}
						style={styles.input}
					/>
					<Text style={styles.label} secureTextEntry>
						Password
					</Text>
					<TextInput
						onChangeText={(text) => setPassword(text)}
						style={styles.input}
						secureTextEntry
					/>
					<Text style={styles.label}>Confirm password</Text>
					<TextInput
						onChangeText={(text) => setConfirmPassword(text)}
						style={styles.input}
						secureTextEntry
					/>
					<Text style={styles.error}>{error}</Text>
					<View style={styles.btnContainer}>
						<Button
							onPress={handleSignUp}
							buttonStyle={styles.btn}
							color='#FEB800'
							title='continue'
						/>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		justifyContent: 'space-around',
	},

	scrollView: {
		width: '100%',
		height: '100%',
		backgroundColor: '#F2F0F0',
	},

	header: {
		height: 250,
		width: '100%',
		resizeMode: 'cover',
	},

	overlay: {
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)',
		paddingLeft: 50,
		paddingRight: 50,
	},

	heading: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'white',
	},

	subHeading: {
		fontSize: 20,
		color: 'white',
	},

	registration: {
		width: '100%',
		height: screenHeight - 550,
		alignItems: 'flex-start',
		padding: 50,
		backgroundColor: '#F2F0F0',
	},

	sectionHeading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 50,
	},
	input: {
		width: '100%',
		height: 40,
		backgroundColor: 'white',
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 30,
	},
	label: {
		marginBottom: 10,
	},
	btnContainer: {
		fontWeight: 'bold',
		width: '100%',
		fontSize: 20,
		alignItems: 'flex-end',
		marginTop: 30,
	},
	error: {
		color: 'black',
		textAlign: 'center',
		marginBottom: 10,
	},
});
