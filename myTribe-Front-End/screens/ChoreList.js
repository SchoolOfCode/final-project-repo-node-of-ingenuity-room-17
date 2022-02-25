import {
	StyleSheet,
	Text,
	View,
	Button,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';
import Chore from '../components/Chore';

export default function ChoreList(props) {
	const [family, setFamily] = useState(false);
	const [member, setMember] = useState(false);
	const [chores, setChores] = useState(false);

	useEffect(() => {
		const currentFamily = props.navigation.getParam('family');
		const currentMember = props.navigation.getParam('member');
		if (currentFamily.chores !== undefined) {
			setChores(currentFamily.chores);
		}
		setFamily(currentFamily);
		setMember(currentMember);
	});

	const familyManagementHandler = () => {
		props.navigation.navigate({ routeName: 'Family' });
	};

	const addChoreHandler = () => {
		props.navigation.setParams({ routeName: 'AddChores' });
		props.navigation.navigate('AddChores', {
			family: family,
		});
	};
	return (
		<KeyboardAvoidingView style={styles.container}>
			<Text style={styles.heading}>{member && member}</Text>
			<Text style={styles.date}>21st February 2022</Text>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.choreList}
			>
				{chores ? (
					chores.map((el) => (
						<Chore
							key={el.id}
							title={el.title}
							member={el.member}
							description={el.description}
							dueDate={el.dueDate}
						/>
					))
				) : (
					<Text>You haven't added any chores to your list.</Text>
				)}
			</ScrollView>
			<View style={styles.btnContainer}>
				<Button
					onPress={addChoreHandler}
					title='add chore'
					color='#FFBD00'
				/>
				<Button
					onPress={familyManagementHandler}
					title='family management'
					color='#FFBD00'
				/>
				<Button title='logout' color='#FFBD00' />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		paddingTop: 100,
		paddingBottom: 50,
		paddingLeft: 50,
		paddingRight: 50,
		backgroundColor: '#F2F0F0',
	},

	heading: {
		fontSize: 30,
		fontWeight: 'bold',
	},

	date: {
		color: '#AAAAAC',
	},

	choreList: {
		marginTop: 50,
	},

	btnContainer: {
		paddingTop: 10,
		paddingBottom: 10,
	},
});
