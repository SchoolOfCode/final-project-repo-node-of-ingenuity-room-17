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
import headerImage from '../assets/header-background.jpeg';

const screenHeight = Dimensions.get('window').height;

export default function SignUp() {
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
					<TextInput style={styles.input} />
					<Text style={styles.label}>Email</Text>
					<TextInput style={styles.input} />
					<Text style={styles.label} secureTextEntry>
						Password
					</Text>
					<TextInput style={styles.input} />
					<Text style={styles.label}>Confirm password</Text>
					<TextInput style={styles.input} secureTextEntry />
					<View style={styles.btnContainer}>
						<Button
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
});
