import { db } from './firebaseConfig';
import {
	doc,
	setDoc,
	collection,
	getDocs,
	where,
	query,
} from 'firebase/firestore';

export async function addToDb(family) {
	const newFamily = doc(collection(db, 'families'));
	const res = await setDoc(newFamily, family);
	return res;
}

export async function getFamily(uid) {
	const q = query(collection(db, 'families'), where('uid', '==', uid));
	const querySnapshot = await getDocs(q);
	const results = [];
	querySnapshot.forEach((doc) => {
		results.push(doc.data());
	});
}
