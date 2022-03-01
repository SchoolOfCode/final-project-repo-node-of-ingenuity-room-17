import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	ScrollView,
} from 'react-native';
import React from 'react';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//DUMMY OPTIONS DATE

// SET SIZE OF MODAL
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {
	//MAKES MODAL APPEAR AND DISAPPEAR ON PRESS
	const onPressItem = (option) => {
		props.changeModalVisible(false);
		props.setData(option);
	};
	//GOES THROUGH DUMMY DATA AT INDEX
	const option = props.members.map((item, index) => {
		return (
			<TouchableOpacity
				style={styles.option}
				key={index}
				onPress={() => onPressItem(item)}
			>
				<Text style={styles.optionText}>{item}</Text>
			</TouchableOpacity>
		);
	});
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => props.changeModalVisible(false)}
		>
			<View
				style={[
					styles.modal,
					{ width: WIDTH - 80, height: props.members.length * 43 },
				]}
			>
				<ScrollView>{option}</ScrollView>
			</View>
		</TouchableOpacity>
	);
};

export default ModalPicker;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'space-evenly',
		alignContent: 'center',
	},

	option: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		fontWeight: 'bold',
		padding: 10,
		backgroundColor: '#FFEFC2',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#FFBD00',
		marginBottom: 5,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		shadowOpacity: 0.2,
	},
	optionText: {
		color: '#FFBD00',
		fontWeight: 'bold',
	},
});
