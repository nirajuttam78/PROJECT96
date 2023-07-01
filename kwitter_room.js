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
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function redirectToRoomName(name) {
      console.log("you clicked on " + name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"

}