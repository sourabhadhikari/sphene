import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyDofMKQpWizK5oPN9q0n755hGN9x9otwBI",
        authDomain: "sphene-contact-form.firebaseapp.com",
        databaseURL: "https://sphene-contact-form.firebaseio.com",
        projectId: "sphene-contact-form",
        storageBucket: "sphene-contact-form.appspot.com",
        messagingSenderId: "1051695882175",
        appId: "1:1051695882175:web:c5a4620f5eae0519e4cb0a"
      
      
})



var db = firebaseApp.firestore();
export default firebaseApp;
export {db};