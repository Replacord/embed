
import { $ } from '../index.js'


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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let videoid = urlParams.get('video')

let dbRef = db.ref('videos/' + videoid)

dbRef.get().then((snapshot) => {

  let data = snapshot.val()
let videourl = data.videourl
let videotitle = data.name

let platform = $.getById('video')

let e1 = $.ce("source", platform)
$.att(e1, 'src', videourl)
$.att(e1, 'type', 'video/mp4') 


let vidtitle = $.getById('videotitle')
$.txtc(vidtitle, videotitle)
  
  
})
