// gets the current users name

let currentuid = localStorage.getItem('uid')

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
let db = firebase.database()

let dbRef = db.ref('users/' + currentuid)

dbRef.get().then((snapshot) => {

let currentusername = snapshot.val().username
let currentpfp = snapshot.val().pfp

  let Currentuser = document.getElementById('currentuser')

      Currentuser.innerHTML = `<button class="navpfp" style="background-image: url('${currentpfp}'); " ></button> ${currentusername}`
      let gotologin = document.getElementById('gotologin')
          gotologin.style.visibility = 'hidden'
    
})


// Home Button
document.getElementById('home').onclick = function(){window.location.href=`https://${document.domain}/`}

// Apps Button
document.getElementById('apps').onclick = function(){window.location.href=`https://${document.domain}/apps/`}

// devportal Button
document.getElementById('devportal').onclick = function(){window.location.href=`https://${document.domain}/devportal/`}

// Support Button
document.getElementById('support').onclick = function(){window.location.href=`https://${document.domain}/support/`}

// Login/Register Button
document.getElementById('gotologin').onclick = function(){window.location.href=`https://${document.domain}/forms/Login.html`}

// Account
document.getElementById('currentuser').onclick = function(){window.location.href=`https://${document.domain}/account/?&place=settings`}