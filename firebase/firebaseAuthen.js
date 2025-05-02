import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDWM1gOxefIR34pMdRg9ZU7m1bJuSExH0I',
  authDomain: 'mobileapplication-abf40.firebaseapp.com',
  projectId: 'mobileapplication-abf40',
  storageBucket: 'mobileapplication-abf40.firebasestorage.app',
  messagingSenderId: '497218997193',
  appId: '1:497218997193:web:e7b88063a60c6a1d79f618',
  measurementId: 'G-PNPRG6NKGN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  db,
  createUserWithEmailAndPassword, 
};
