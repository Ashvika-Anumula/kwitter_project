
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC9fOzgpVbczzov7Pp4xMwCr6w5NNGNVD4",
    authDomain: "kwitter-31ed8.firebaseapp.com",
    databaseURL: "https://kwitter-31ed8-default-rtdb.firebaseio.com",
    projectId: "kwitter-31ed8",
    storageBucket: "kwitter-31ed8.appspot.com",
    messagingSenderId: "942485937569",
    appId: "1:942485937569:web:b6c03314a92df237e47fe0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+ user_name +" !";

  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ 
          purpose:"Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name -" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="kwitter.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}


