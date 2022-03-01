import { db } from './firebaseConfig';
import {
	collection,
	addDoc,
	where,
	query,
	getDocs,
	updateDoc,
	doc,
} from 'firebase/firestore';

// Add a new document with a generated id.

export async function addToDb(family) {
	const docRef = await addDoc(collection(db, 'families'), family);
	console.log('Document written: ', docRef.id);
	return docRef.id;
}

export async function getFamily(uid) {
	const q = query(collection(db, 'families'), where('uid', '==', uid));
	const querySnapshot = await getDocs(q);
	const results = [];
	querySnapshot.forEach((doc) => {
		results.push(doc.data());
	});
	return results;
}

export async function updateFamily(data, docID) {
	const familyRef = doc(db, 'families', docID);
	const res = await updateDoc(familyRef, data);
}
