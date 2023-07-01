//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBejdIDNFRYiW_BRkmbTx-NyIoQuo0qlzI",
      authDomain: "kwitter-c33c9.firebaseapp.com",
      databaseURL: "https://kwitter-c33c9-default-rtdb.firebaseio.com",
      projectId: "kwitter-c33c9",
      storageBucket: "kwitter-c33c9.appspot.com",
      messagingSenderId: "677985806431",
      appId: "1:677985806431:web:80a1a4dbe87e9d57a653ea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0  
      });
      document.getElementById("msg").value = "";
}
