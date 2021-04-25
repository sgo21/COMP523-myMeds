import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

firebase.initializeApp({
    apiKey: "AIzaSyDzQeXdSZhAvipJZNgzvmFI5GTTBJHxLtU",
    authDomain: "my-meds-a3fdf.firebaseapp.com",
    projectId: "my-meds-a3fdf",
    storageBucket: "my-meds-a3fdf.appspot.com",
    messagingSenderId: "709594992642",
    appId: "1:709594992642:web:229b57dd93e4d981cd171b"
});
  
var db = firebase.firestore();
var auth = firebase.auth()
var timeNow = firebase.firestore.Timestamp.now();

export {db, auth, timeNow};