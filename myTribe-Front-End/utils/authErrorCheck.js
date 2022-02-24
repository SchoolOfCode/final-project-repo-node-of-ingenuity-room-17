export default function authErrorCheck(error, setError) {
	switch (error.code) {
		case 'auth/too-many-requests':
			setError(
				'Access to this account has been temporarily disabled due to many failed login attempts. Please try again later.'
			);
			break;
		case 'auth/wrong-password':
			setError('Incorrect password. Please try again.');
			break;
		case 'auth/invalid-email':
			setError('Please enter a valid email address.');
			break;
		case 'auth/user-not-found':
			setError('Username not found.');
			break;
		default:
			setError(error.code);
	}
}
