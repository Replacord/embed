import { html } from '/BetterDOMjs.js'

var currentuid = localStorage.getItem('uid')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoY9UIAnkAGlCxrW_Ridw8PgXayWB2eqE",
  authDomain: "replacord-video.firebaseapp.com",
  databaseURL: "https://replacord-video-default-rtdb.firebaseio.com",
  projectId: "replacord-video",
  storageBucket: "replacord-video.appspot.com",
  messagingSenderId: "401908307696",
  appId: "1:401908307696:web:71d2779b944c3f899a5435",
  measurementId: "G-7RVWWNYV7B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
let db = firebase.database()

if(html.urlparamsis('place', 'settings') == true){
  

  // make the Navigation bar
createnavbar()
  
  let newn = document.createElement('input')
  newn.setAttribute('type', 'text')
  newn.setAttribute('placeholder', 'video name')
  newn.setAttribute('class', 'form-input')
  newn.setAttribute('id', 'newname')
  newn.setAttribute('maxlength', '40')
  
  let sub = document.createElement('Button')

  sub.setAttribute('id', 'updaten')
  sub.setAttribute('class', 'form-btn-h')
  let subt = document.createElement('span')
      subt.setAttribute('class', 'navbtntxt')
      subt.textContent = 'Update Name'
      sub.append(subt)
  document.body.append(newn, sub)
         newn.addEventListener("keydown", function(event) {
      if (event.which == 13) {
        // Add this user to Firebase Database
    var database_ref = db.ref()
    
    // Create User data
    var user_data = {
      name : document.getElementById('newname').value,
      dfa: 'e'
    }

    // Push to Firebase Database
    database_ref.child('videos/' + Math.random().toString(36).slice(2)).set(user_data)
    // DOne
    alert(document.getElementById('newname').value)
      }
    });
  
 
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
