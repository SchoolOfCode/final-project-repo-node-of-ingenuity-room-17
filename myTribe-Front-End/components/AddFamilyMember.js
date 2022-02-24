import {
	View,
	Image,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import addUserIcon from '../assets/add-user-light.png';
export default function AddFamilyMember(props) {
	return (
		<View style={styles.memberControls}>
			<TextInput style={[styles.memberInput]} />
			<BouncyCheckbox fillColor='#FFBD00' />
			<TouchableOpacity onPress={props.pressHandler}>
				<Image style={styles.addIcon} source={addUserIcon} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	addIcon: {
		height: 30,
		width: 30,
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
});
