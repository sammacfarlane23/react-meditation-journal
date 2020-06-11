import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDlCtVoisoAJ6B5FgaU8vOmypOr1woSZJQ',
  authDomain: 'journal-1a878.firebaseapp.com',
  databaseURL: 'https://journal-1a878.firebaseio.com',
  projectId: 'journal-1a878',
  storageBucket: '1a878.appspot.com',
  messagingSenderId: '854931825276',
  appId: '1:854931825276:web:9d5bd4ed5df1a5ec749ff9',
  measurementId: 'G-4FLQF7ZFZ6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
