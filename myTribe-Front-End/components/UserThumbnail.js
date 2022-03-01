import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import childAvatar from '../assets/child-avatar.png';
import parentAvatar from '../assets/parent-avatar.png';
const UserThumbnail = ({ isParent, name, selectHandler }) => {
	return (
		<TouchableOpacity
			style={styles.thumbnail}
			onPress={() => selectHandler(name)}
		>
			<Image
				style={styles.imgThumbnail}
				source={isParent ? parentAvatar : childAvatar}
			/>
			<Text>{name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	thumbnail: {
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	imgThumbnail: {
		width: 60,
		height: 60,
		marginBottom: 5,
	},
});
export default UserThumbnail;
