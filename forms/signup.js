import { html } from '../BetterDOMjs.js'
let defpfp = 'https://firebasestorage.googleapis.com/v0/b/replacord-2337f.appspot.com/o/uiandmore%2F2022_01_15_0zb_Kleki.png?alt=media&token=b9a15dba-a152-4d17-b168-bf4a829a5e67'

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
let database = firebase.database()
let auth = firebase.auth()


//document.getElementById('login').addEventListener('click', GoogleLogin)
//      document.getElementById('logout').addEventListener('click', LogoutUser)



// Page

createnavbar()

html.title('SignIn/Up - Replacord')

html.h1('Login')

html.h3('Username', 'tuser')
html.input('username', '','Username', 999999, 'user', 'form-input')

html.h3('Email', 'temail')
html.input('email', '','Email', 999999, 'email', 'form-input')

html.h3('Password', 'tpass')
html.input('password', '','Password', 999999, 'pass', 'form-input')

let signupbtn = document.createElement('button')
    signupbtn.setAttribute('id', 'loginbtn')
    signupbtn.setAttribute('class', 'form-btn')
let signupbtntxt = document.createElement('span')
    signupbtntxt.setAttribute('class', 'navbtntxt')
    signupbtntxt.textContent = 'SignUp'

signupbtn.append(signupbtntxt)

let gotos = document.createElement('button')
    gotos.setAttribute('id', 'loginbtn')
    gotos.setAttribute('class', 'form-btn')
let gotostxt = document.createElement('span')
    gotostxt.setAttribute('class', 'navbtntxt')
    gotostxt.textContent = 'Go To Login'


gotos.append(gotostxt)

html.div('inputcont', 'form-cont')

html.append('tuser', 'inputcont')
html.append('user', 'inputcont')
html.append('temail', 'inputcont')
html.append('email', 'inputcont')
html.append('tpass', 'inputcont')
html.append('pass', 'inputcont')
document.getElementById('inputcont').append(signupbtn)
document.getElementById('inputcont').append(gotos)

signupbtn.onclick = function(){register(`${document.domain}/`)}

gotos.onclick = function(){ window.location.href = `https://${document.domain}/forms/`}
//////////////////////////////////////////////////////////////////////////////////////
      



//    Functions
function createnavbar(){
// Page Title

let pgtitle = document.createElement('title')
    pgtitle.textContent = 'Account - Replacord'
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


document.body.append(Navbar)
Navbar.append(Navtitle, Home, Apps, Devportal, Support)



// Button Triggers
// Home Button
document.getElementById('home').onclick = function(){window.location.href=`https://${document.domain}/`}

// Apps Button
document.getElementById('apps').onclick = function(){window.location.href=`https://${document.domain}/apps/`}

// devportal Button
document.getElementById('devportal').onclick = function(){window.location.href=`https://${document.domain}/devportal/`}

// Support Button
document.getElementById('support').onclick = function(){window.location.href=`https://${document.domain}/support/`}
}





function register(redirect) {
  // Get all our input fields
  let email = document.getElementById('email').value
  let password = document.getElementById('pass').value
  let username = document.getElementById('user').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  if (validate_field(username) == false){
    alert('Your Username is Outta Line!!')
    return
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      pfp: defpfp,
      username: username,
      email: email,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)
    localStorage.setItem("uid", user.uid)
    // Done
    alert('User Created!!')
    window.location.href = 'https://' + redirect
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}





// Validate Functions
function validate_email(email) {
  let expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
