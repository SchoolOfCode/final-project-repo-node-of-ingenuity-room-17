import { db } from "./firebaseConfig";
import { doc, setDoc, collection } from "firebase/firestore/lite";

export default async function addToDb() {
  const newFamily = doc(collection(db, "families"));
  await setDoc(newFamily, {
    name: "Tokyo",
    country: "Japan",
  });
}
