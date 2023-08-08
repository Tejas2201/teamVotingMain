import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDoC9t9CAL29jjSAah9qS2QB-ajh-goETc",
    authDomain: "teamvotingmain.firebaseapp.com",
    projectId: "teamvotingmain",
    storageBucket: "teamvotingmain.appspot.com",
    messagingSenderId: "870703819355",
    appId: "1:870703819355:web:bd0104f4e532e32c806d7e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();