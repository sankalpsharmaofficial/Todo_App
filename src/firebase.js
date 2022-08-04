// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC1dxuKqyu5Qp_6dXQVVwa7rBApgFlk9Ho',
	authDomain: 'todo-app-2363e.firebaseapp.com',
	projectId: 'todo-app-2363e',
	storageBucket: 'todo-app-2363e.appspot.com',
	messagingSenderId: '154587797544',
	appId: '1:154587797544:web:68b8838a567871ce577d1d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
