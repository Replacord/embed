
import { $ } from './index.js'

///////////////////////////////////

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
let auth = firebase.auth()
let storage = firebase.storage()

// document.body.innerHTML = ""
// let ref = firebase.database().ref('/videos').orderByChild('index')
// ref.once('value', (snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     var childKey = childSnapshot.key;
//     var data = childSnapshot.val();
//     var vidurl = data.videourl
//  let platform = $.ce('iframe', document.body)
  
//  $.att(platform, 'src', vidurl)
 
// $.att(platform, 'frameborder', '0')
// $.att(platform, 'width', '900')
// $.att(platform, 'height', '500')
// $.att(platform, 'allow', "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" )
//   })});

document.body.innerHTML = ""
let ref = firebase.database().ref('/videos').orderByChild('index')
ref.once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var videokey = childSnapshot.key;
    var data = childSnapshot.val();
    var vidurl = data.videourl
    var vidcover = data.thumbnail
    var vidname = data.name
    
    
    let link = $.ce('a', document.body)
$.att(link, 'href', 'https://replacord.glitch.me/videoapp/watch/?video=' + videokey) 
    
let thumbnail = $.ce('button', link)
$.att(thumbnail, 'style', `background-image: url(${vidcover}); width:355; height:200; background-size: 100%;`)
let videname = $.ce('span', thumbnail)
$.txtc(videname, vidname)
$.att(videname, 'style', ' position: relative; top: 18vh; font-size:3vh;')

})});

