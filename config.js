import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB6PQV5ujm_9CiacLfLCzpwhPjHbevJXZ4",
  authDomain: "booksanta-c17c2.firebaseapp.com",
  databaseURL: "https://booksanta-c17c2.firebaseio.com",
  projectId: "booksanta-c17c2",
  storageBucket: "booksanta-c17c2.appspot.com",
  messagingSenderId: "975344104493",
  appId: "1:975344104493:web:46bc3d00615ffaec2574a4"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
