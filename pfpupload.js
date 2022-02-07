export function pfpupload(fileinput){
	// GET FILE FROM THE  FILE INPUT 
	const file = document.getElementById(fileinput).files[0]
// MAKE A REFERNCE TO FIREBASE .
	const storageRef = firebase.storage().ref()
	// MAKE A CHILD REFERENCE . WE ARE MAKING A FOLDER  NAMED IMAGES AND ADDING THE FILE THE USER PICKED TO FIREBASE
const final = storageRef.child(`images/c/c.png`)
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
		 		// SELECTING THE BODY AND APPENDING AN IMG TAG WITH  THE URL
		 		return url
        alert("Profile Pic Updated")
		 	})
		 }

		)

}




