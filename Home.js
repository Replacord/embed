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

function createnavbar(){
// Page Title

let pgtitle = document.createElement('title')
    pgtitle.textContent = 'Home - Replacord'
document.body.append(pgtitle)

// Navigation Bar & Buttons

//bar

let Navbar = document.createElement('nav')
    Navbar.setAttribute('class', 'navbar')

//bar title

let Navtitle = document.createElement('span')
    Navtitle.setAttribute('class', 'navtitle')
    Navtitle.textContent = 'Replacord'


// buttons
let Home = document.createElement('button')
    Home.setAttribute('id', 'home')
    Home.setAttribute('class', 'navbtn')
let Hometxt = document.createElement('span')
    Hometxt.setAttribute('class', 'navbtntxt')
    Hometxt.textContent = 'Home'
    Home.append(Hometxt)

let Apps = document.createElement('button')
    Apps.setAttribute('id', 'apps')
    Apps.setAttribute('class', 'navbtn')
let apptxt = document.createElement('span')
    apptxt.setAttribute('class', 'navbtntxt')
    apptxt.textContent = 'Apps'
    Apps.append(apptxt)


let Devportal = document.createElement('button')
    Devportal.setAttribute('id', 'devportal')
    Devportal.setAttribute('class', 'navbtn')
let Devportaltxt = document.createElement('span')
    Devportaltxt.setAttribute('class', 'navbtntxt')
    Devportaltxt.textContent = 'Devportal'
    Devportal.append(Devportaltxt)

let Support = document.createElement('button')
    Support.setAttribute('id', 'support')
    Support.setAttribute('class', 'navbtn')
let Supporttxt = document.createElement('span')
    Supporttxt.setAttribute('class', 'navbtntxt')
    Supporttxt.textContent = 'Support'
    Support.append(Supporttxt)

let gtl = document.createElement('button')
    gtl.setAttribute('id', 'gtl')
    gtl.setAttribute('class', 'navbtn')
let gtltxt = document.createElement('span')
    gtltxt.setAttribute('class', 'navbtntxt')
    gtltxt.textContent = 'Login/Register'
    gtl.append(gtltxt)

let currentuser = document.createElement('span')
    currentuser.setAttribute('id', 'currentuser')
    currentuser.setAttribute('class', 'navcurrentuser')

document.body.append(Navbar)
Navbar.append(Navtitle, Home, Apps, Devportal, Support, currentuser, gtl)

//Check If User is Logged In


let dbRef = db.ref('users/' + currentuid)

dbRef.get().then((snapshot) => {

let currentusername = snapshot.val().username
let currentpfp = snapshot.val().pfp

  let Currentuser = document.getElementById('currentuser')

      Currentuser.innerHTML = `<button id="account" class="navpfp" style="background-image: url('${currentpfp}'); " ></button> ${currentusername}`
      let gotologin = document.getElementById('gtl')
          gotologin.style.visibility = 'hidden'
    
})



// Button Triggers
// Home Button
document.getElementById('home').onclick = function(){window.location.href=`https://${document.domain}/`}

// Apps Button
document.getElementById('apps').onclick = function(){window.location.href=`https://${document.domain}/apps/`}

// devportal Button
document.getElementById('devportal').onclick = function(){window.location.href=`https://${document.domain}/devportal/`}

// Support Button
document.getElementById('support').onclick = function(){window.location.href=`https://${document.domain}/support/`}


// Login/Register Button
document.getElementById('gtl').onclick = function(){window.location.href=`https://${document.domain}/forms/`}

// User account Button
document.getElementById('currentuser').onclick = function(){window.location.href=`https://${document.domain}/account/?place=settings`}
}
createnavbar()
