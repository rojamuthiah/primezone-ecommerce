import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAfhad9D13HY30XSWdKBuvczrs3gQKDjws",
  authDomain: "shirts-98df5.firebaseapp.com",
  projectId: "shirts-98df5",
  storageBucket: "shirts-98df5.appspot.com",
  messagingSenderId: "870168634790",
  appId: "1:870168634790:web:ee9601649dfbb1d0d91b67",
  measurementId: "G-3EL5N26V25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
