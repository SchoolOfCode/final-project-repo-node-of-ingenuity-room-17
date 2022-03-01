// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBKti3zPlNL0jNK-1svQ_mza0KcVSoyzoU',
	authDomain: 'tribe-dev-b48f8.firebaseapp.com',
	projectId: 'tribe-dev-b48f8',
	storageBucket: 'tribe-dev-b48f8.appspot.com',
	messagingSenderId: '580850802996',
	appId: '1:580850802996:web:fa1ea799fda165a5310561',
	measurementId: 'G-W7CXX7EJDJ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
