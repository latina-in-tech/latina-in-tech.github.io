// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: '$API_KEY',
  authDomain: '$PROJECT_ID.firebaseapp.com',
  projectId: '$PROJECT_ID',
  storageBucket: '$PROJECT_ID.appspot.com',
  messagingSenderId: '$MESSAGING_SENDER_ID',
  appId: '$APP_ID',
  measurementId: '$MEASUREMENT_ID'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebaseApp);
export { firebaseApp, firestoreDb };
