import { html } from '../BetterDOMjs.js'

var currentuid = localStorage.getItem('uid')
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

if(html.urlparamsis('place', 'settings') == true){
  

  // make the Navigation bar
createnavbar()
  // using 
let dbRef = db.ref('users/' + currentuid)

dbRef.get().then((snapshot) => {
  let newn = document.createElement('input')
  newn.setAttribute('type', 'text')
  newn.setAttribute('value', snapshot.val().username)
  newn.setAttribute('class', 'form-input')
  newn.setAttribute('id', 'newname')
  newn.setAttribute('maxlength', '23')
  newn.onkeyup = function(){newn.style.width = (newn.value.length *10 + 120) + 'px'};
  
  let sub = document.createElement('Button')

  sub.setAttribute('id', 'updaten')
  sub.setAttribute('class', 'form-btn-h')
  let subt = document.createElement('span')
      subt.setAttribute('class', 'navbtntxt')
      subt.textContent = 'Update Name'
      sub.append(subt)
  document.body.append(newn, sub)
  newn.style.width = (newn.value.length *10 + 120) + 'px'
         newn.addEventListener("keydown", function(event) {
      if (event.which == 13) {
        // Add this user to Firebase Database
    var database_ref = db.ref()
    
    // Create User data
    var user_data = {
      username : document.getElementById('newname').value 
    }

    // Push to Firebase Database
    database_ref.child('users/' + currentuid).update(user_data)
    localStorage.setItem("uid", currentuid)
    // DOne
    alert('Username Updated')
    window.location.reload()
      }
    });
  
  sub.onclick = function(){

    // Add this user to Firebase Database
    var database_ref = db.ref()
    
    // Create User data
    var user_data = {
      username : document.getElementById('newname').value 
    }

    // Push to Firebase Database
    database_ref.child('users/' + currentuid).update(user_data)
    localStorage.setItem("uid", currentuid)
    // DOne
    alert('Username Updated')
    window.location.reload()
  }})
let dbRefff = db.ref('users/' + currentuid)

dbRefff.get().then((snapshot) => {

let currentpfp = snapshot.val().pfp
  
// submit pfp
  let subf = document.createElement('Button')
  subf.setAttribute('id', 'updatepfp')
  subf.setAttribute('class', 'form-btn-h')
  let sf = document.createElement('span')
      sf.setAttribute('class', 'navbtntxt')
      sf.textContent = 'Update Pfp'
      subf.append(sf)
  // upload pfp 
    let pfpv = document.createElement('label')
  pfpv.setAttribute('for', 'pfphold')
  pfpv.setAttribute('title', 'Click me to choose a new pfp')

     let pfpv2 = document.createElement('img')
  pfpv2.setAttribute('class', 'pfpedit')
  pfpv2.setAttribute('id', 'pfpview')
  pfpv2.style.backgroundImage = 'url("https://firebasestorage.googleapis.com/v0/b/replacord-2337f.appspot.com/o/uiandmore%2F2022_01_15_0y5_Kleki.png?alt=media&token=627dc030-cd67-4051-9da6-334c162d118d")'  
    
  pfpv.append(pfpv2)
  
  let pfpf = document.createElement('input')
  pfpf.setAttribute('type', 'file')
  pfpf.setAttribute('id', 'pfphold')
  pfpf.setAttribute('accept', '.ico, .TIFF, .BMP, .SVG, .PNG, .JPEG, .AVIF, .webp, .jfif, .jpg')
  pfpf.style.visibility = 'hidden'
  
  document.body.append(pfpv, subf, pfpf)
  
  const image_input = document.getElementById("pfphold");
var uploaded_image;

image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.getElementById("pfpview").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
  subf.onclick = function(){ pfpupload( 'pfphold' ) }
  
})
  
  dbRefff.get().then((snapshot) => {

  html.textarea(snapshot.val().bio, 'newbio')
    let a = document.createElement('button')
        a.textContent = 'Submit Bio'
    document.body.append(a)
    a.onclick = () => {
      // Add this user to Firebase Database
    var database_ref = db.ref()
    
    
    // Create User data
    var user_data = {
      bio : document.getElementById('newbio').value 
    }

    // Push to Firebase Database
    database_ref.child('users/' + currentuid).update(user_data)
    localStorage.setItem("uid", currentuid)
    // DOne
    alert('Bio Updated')
    window.location.reload()
    }
  }
  )}
  

// view profile
if(html.urlparamsis('place', 'view') == true){
  createnavbar()
  let dbRef = db.ref('users/' + html.geturlparams('user'))

dbRef.get().then((snapshot) => {
  
  let data = snapshot.val()
  let bioo = data.bio
  let biotext = bioo.replaceAll('%domain%', document.domain) 
  
  html.h1(html.img(data.pfp, '', 'profilepfp'))
  html.h1(data.username + "'s Profile", '', 'profileuser')
  html.div('biocont', 'bio-container')
  
  let bio = document.createElement('p')
  bio.innerHTML = biotext
  bio.setAttribute('id', 'bio')
  bio.setAttribute('class', 'bio')
  
  document.body.append(bio)

  html.append('bio', 'biocont')


})
  
}




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


function pfpupload(fileinput){
	// GET FILE FROM THE  FILE INPUT 
	const file = document.getElementById(fileinput).files[0]

  
// MAKE A REFERNCE TO FIREBASE .
	const storageRef = firebase.storage().ref()
	// MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
const final = storageRef.child(`userpfps/${currentuid}/currentpfp.png`)
// THIS UPLOAD THE FILE.. WE STORE IT IN A CONST TO DOWNLOAD THE THE FILE AND E.C.T
	const task = final.put(file)

task.on('state_changed',
		// PROGRESS FUNCTION
		function progress(progress){

			console.log(progress.bytesTransferred / progress.totalBytes *100)
		},  
		function error(err){
			console.log('There was An Err ' + err)
		},
		 function completed(){
		 	final.getDownloadURL()
		 	// RETURN A PROMISE
		 	.then(url=>{
		 		// Add this user to Firebase Database
    var database_ref = db.ref()
    
    // Create User data
    var user_data = {
      pfp : url
    }

    // Push to Firebase Database
    database_ref.child('users/' + currentuid).update(user_data)
    localStorage.setItem("uid", currentuid)
        
        alert("Profile Pic Updated")
        window.location.reload()
		 	})
		 }

		)

}
