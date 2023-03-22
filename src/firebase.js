import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCfddlqD_3rlzN7Uq1aVbluPxe19H3FYEs",
  authDomain: "our-project-c05da.firebaseapp.com",
  projectId: "our-project-c05da",
  storageBucket: "our-project-c05da.appspot.com",
  messagingSenderId: "884239026697",
  appId: "1:884239026697:web:735be90e7af9927b8086d8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const usersRef = collection(db, "users");
export const imageListRef = ref(storage, "avatars/");
export const provider = new GoogleAuthProvider();
export default app;
