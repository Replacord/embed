const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let server = urlParams.get('chatroom')
let currentuid = urpPArams.get('account')

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
const auth = firebase.auth()
const db = firebase.database()
createnavbar()
let msgscont = document.getElementById('chtcont')
msgscont.scrollTop = msgscont.scrollHeight

document.write(
document.body.inneHTML+`
<style>
*{
  scroll-behavior: smooth;
}
</style>
`)

// function getchat(){

//   msgscont.innerHTML = ""
// let ref = firebase.database().ref('chatdata/e/').orderByChild('index')
// ref.once('value', (snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     var childKey = childSnapshot.key;
//     var data = childSnapshot.val();
//     var msg = data.msg
//     var uid = data.uid
//     // ...
//     const dbRef = db.ref('users/' + data.uid)
    
//     dbRef.get().then((snapshot) => {

// let username = snapshot.val().username
// let pfp = snapshot.val().pfp
  
//     let msgpfp = document.createElement('button')
//           msgpfp.setAttribute('class', 'msgpfp')
//           msgpfp.style.backgroundColor = 'red'
//           msgpfp.style.backgroundImage = `url(${pfp})`
      
//     msgpfp.onclick = () => {
      
//       window.location.href = `https://${document.domain}/account/?user=${data.uid}&place=view`
      
//     }
          
//     let mssg = document.createElement('h1')
//           mssg.textContent = username + ' | ' + msg
//           mssg.style.backgroundColor = 'green'
//           mssg.append(msgpfp)
//           msgscont.append(mssg)
    
//   })});
// });
// }

function addmsg(data){
  var msg = data.msg
    var uid = data.uid
    let time = data.time
let date = data.date
let txtcolor = data.color
    // ...
    const dbRef = db.ref('users/' + data.uid)
    
    dbRef.get().then((snapshot) => {
let data2 = snapshot.val()
let username = data2.username
let pfp = data2.pfp

    let msgpfp = document.createElement('button')
          msgpfp.setAttribute('class', 'msgpfp')
          msgpfp.style.backgroundImage = `url(${pfp})`
      
    msgpfp.onclick = () => {
      
      window.location.href = `https://${document.domain}/account/?user=${data.uid}&place=view`
      
    }
    let mssgc = document.createElement('div')
    mssgc.style.backgroundColor = '#859BFF'
    let mssg = document.createElement('div')
          mssg.setAttribute('class', 'msgtxt')
          mssg.textContent = `${username} - ${time} | ${date} | ${msg}`
          mssg.style.color = txtcolor 
          mssgc.append(msgpfp)
          mssgc.append(mssg)
          msgscont.append(mssgc)
      
      msgscont.scrollTop = msgscont.scrollHeight
    
  })
}

var commentsRef = firebase.database().ref('chatdata/'+server+'/msgs/').orderByChild('index')


commentsRef.on('child_added', (snapshot) => {
   var data = snapshot.val()
    addmsg(data)
  
  
  })


let sendbtn = document.createElement('button')
    sendbtn.setAttribute('class', 'form-btn-h')
let sendbtntxt = document.createElement('span')
    sendbtntxt.setAttribute('class', 'navbtntxt')
    sendbtntxt.textContent = 'Send Message'
document.body.append(sendbtn)
sendbtn.append(sendbtntxt)


sendbtn.onclick = function(){
  
  let randomColor = getDarkColor()
  
 function getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}
  
  let date = new Date();
var datee = (date.getMonth() + 1) + "/" + date.getDate()
let dateee = new Date();

      if (dateee.getHours() > 12 ) {

var time = (dateee.getHours() - 12) + ':' + dateee.getMinutes() + ' pm'

 send(server, time, datee, randomColor)
}
      else {

var time = (dateee.getHours()) + ':' + dateee.getMinutes() + ' am'

 send(server, time, datee, randomColor)

}
  
  
  
}



function createnavbar(){
// Page Title

let pgtitle = document.createElement('title')
    pgtitle.textContent = 'ChatApp - Replacord'
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

let currentuser = document.createElement('span')
    currentuser.setAttribute('id', 'currentuser')
    currentuser.setAttribute('class', 'navcurrentuser')

let chatcontainter = document.createElement('div')
    chatcontainter.setAttribute('id', 'chtcont')
    chatcontainter.setAttribute('class', 'chat-cont')  
  
  
document.body.append(Navbar, chatcontainter)
Navbar.append(Navtitle, Home, Apps, Devportal, Support, currentuser)

//Check If User is Logged In


let dbRef = db.ref('users/' + currentuid)

dbRef.get().then((snapshot) => {

let currentusername = snapshot.val().username
let currentpfp = snapshot.val().pfp

  let Currentuser = document.getElementById('currentuser')

      Currentuser.innerHTML = `<button id="account" class="navpfp" style="background-image: url('${currentpfp}'); " ></button> ${currentusername}`
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
}

function msgid(){ 
  let e = Math.random().toString(36).substr(2, 9)
  return e
}
//send a message
 function send(chatid, time, date, color) {
    let text = prompt("Message", "");
   
    const dbRef = db.ref();
dbRef.child("chatdata/"+server+"/msgs/").get().then((snapshot) => {
let index = parseFloat(snapshot.numChildren()) + 1;
let textcolor = 'red'
     db.ref('chatdata/'+server+'/msgs/' + msgid()).set({
    index: index,
    uid: currentuid,
    msg: text,
    time: time,
    date: date,
    color: color

  }
)})}
