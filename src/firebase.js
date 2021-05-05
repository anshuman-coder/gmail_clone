import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBei8SnQTGgyeJ9kU7vsyuPoBCZ7F6KglU",
    authDomain: "b-mail-32fcd.firebaseapp.com",
    projectId: "b-mail-32fcd",
    storageBucket: "b-mail-32fcd.appspot.com",
    messagingSenderId: "159346505459",
    appId: "1:159346505459:web:d31506ee2c85aeac312986",
    measurementId: "G-XTXRYW6SCT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db , auth , provider} ;
