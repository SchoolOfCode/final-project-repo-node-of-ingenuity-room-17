import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
	TextInput,
	Button,
	KeyboardAvoidingView,
	Dimensions,
	ScrollView,
} from 'react-native';
import headerImage from '../assets/family-background.jpeg';
import addUserIcon from '../assets/add-user-light.png';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const screenHeight = Dimensions.get('window').height;

export default function Family() {
	return (
		<KeyboardAvoidingView
			behavior='position'
			style={styles.container}
			keyboardVerticalOffset={-350}
		>
			<ImageBackground
				resizeMode='cover'
				style={styles.header}
				source={headerImage}
			>
				<View style={styles.overlay}>
					<Text style={styles.heading}>Family Setup</Text>
					<Text style={styles.subHeading}>
						Add family members to tribe.
					</Text>
				</View>
				<KeyboardAvoidingView
					behavior='padding'
					style={styles.familyBox}
				>
					<ScrollView
						style={styles.familyDetails}
						showsVerticalScrollIndicator={false}
					>
						<Text style={styles.sectionHeading}>
							Family Details
						</Text>
						<Text style={styles.label}>Family Name</Text>
						<TextInput style={styles.input} />
						<Text style={styles.subSectionHeading}>
							Family members
						</Text>
						<View style={styles.familyMembersBox}>
							<View style={styles.memberLabels}>
								<Text style={styles.memberLabel}>Name</Text>
								<Text style={styles.memberLabel}>Parent</Text>
							</View>
							<View style={styles.memberControls}>
								<TextInput style={[styles.memberInput]} />
								<BouncyCheckbox
									fillColor='#FFBD00'
									style={styles.checkBox}
								/>
								<Image
									style={styles.addIcon}
									source={addUserIcon}
								/>
							</View>
							<View style={styles.memberControls}>
								<TextInput style={[styles.memberInput]} />
								<BouncyCheckbox
									fillColor='#FFBD00'
									style={styles.checkBox}
								/>
								<Image
									style={styles.addIcon}
									source={addUserIcon}
								/>
							</View>
							<View style={styles.memberControls}>
								<TextInput style={[styles.memberInput]} />
								<BouncyCheckbox
									fillColor='#FFBD00'
									style={styles.checkBox}
								/>
								<Image
									style={styles.addIcon}
									source={addUserIcon}
								/>
							</View>
							<View style={styles.memberControls}>
								<TextInput style={[styles.memberInput]} />
								<BouncyCheckbox
									fillColor='#FFBD00'
									style={styles.checkBox}
								/>
								<Image
									style={styles.addIcon}
									source={addUserIcon}
								/>
							</View>
							<View style={styles.memberControls}>
								<TextInput style={[styles.memberInput]} />
								<BouncyCheckbox
									fillColor='#FFBD00'
									style={styles.checkBox}
								/>
								<Image
									style={styles.addIcon}
									source={addUserIcon}
								/>
							</View>
						</View>
					</ScrollView>
					<View style={styles.btnContainer}>
						<Button title='continue' color='#FEB800' />
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
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
	familyBox: {
		height: screenHeight - 250,
		padding: 50,
		backgroundColor: '#F2F0F0',
		paddingBottom: 50,
	},
	label: {
		marginBottom: 5,
	},
	sectionHeading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 50,
	},
	subSectionHeading: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 30,
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

	inputFamilyMember: {
		width: '40%',
	},
	familyMembersBox: {
		marginTop: 20,
	},

	memberLabels: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 5,
	},

	memberLabel: {
		width: '40%',
	},

	memberControls: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},

	memberInput: {
		width: '50%',
		margin: 0,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 10,
	},

	addIcon: {
		height: 30,
		width: 30,
	},

	btnContainer: {
		fontWeight: 'bold',
		width: '100%',
		height: 100,
		fontSize: 20,
		alignItems: 'flex-end',
		marginTop: 30,
	},
});