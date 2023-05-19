 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD8NL4jLqDSkqdfG0Acp-t22oFDIiHQxjM",
   authDomain: "easylogin-ced9b.firebaseapp.com",
   projectId: "easylogin-ced9b",
   storageBucket: "easylogin-ced9b.appspot.com",
   messagingSenderId: "532467707080",
   appId: "1:532467707080:web:ce20ed202680020cc949fd",
   measurementId: "G-ZS5R65ZTH1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

 const auth = getAuth();

 document.getElementById('signUpButton').addEventListener('click', (event) => {
     event.preventDefault()
     const signUpEmail=document.getElementById('signUpEmail').value
     const signUpPassword=document.getElementById('signUpPassword').value

     createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
         .then((userCredential) => {
             console.log(userCredential)
             // Signed in
             const user = userCredential.user;
             // ...
         })
         .catch((error) => {
             console.log('error')
             const errorCode = error.code;
             const errorMessage = error.message;
             // ..
         });

 })

 document.getElementById('signInButton').addEventListener('click', (event) => {
     event.preventDefault()
     const signInEmail=document.getElementById('signInEmail').value
     const signInPassword=document.getElementById('signInPassword').value
     signInWithEmailAndPassword(auth, signInEmail, signInPassword)
         .then((userCredential) => {
             // Signed in
             console.log(userCredential)
             const user = userCredential.user;
             // ...
         })
         .catch((error) => {
             console.log('로그인 실패')
             const errorCode = error.code;
             const errorMessage = error.message;
         });

 })

 console.log('hello world')
 console.log(app)