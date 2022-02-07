let uid = localStorage.getItem("uid")
// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig  = {
  apiKey: "AIzaSyCqUbFGSKEcqJvG4a_MfBuJm6ZetvCQ0zY",
  authDomain: "replacord-2337f.firebaseapp.com",
  databaseURL: "https://replacord-2337f-default-rtdb.firebaseio.com",
  projectId: "replacord-2337f",
  storageBucket: "replacord-2337f.appspot.com",
  messagingSenderId: "151127618954",
  appId: "1:151127618954:web:dd95e0973e429e87ecc473",
  measurementId: "G-SZMNGB4233"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const database = firebase.database()

function msgid(){ 
  let e = Math.random().toString(36).substr(2, 9)
  return e
}
//send a message
 function send(chatid) {
    let text = prompt("Message", "");
  
    const dbRef = firebase.database().ref();
dbRef.child("chatdata/e").get().then((snapshot) => {
let index = parseFloat(snapshot.numChildren()) + 1;
let textcolor = 'red'
     database.ref('chatdata/e/' + msgid()).set({
    index: index,
    uid: uid,
    msg: text,
  });
  }
)}