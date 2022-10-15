
var firebaseConfig = {
      apiKey: "AIzaSyDqJnrXd-g-guwZrIHQ9BTHtEa1ckaQ29A",
      authDomain: "kwitter-13b30.firebaseapp.com",
      databaseURL: "https://kwitter-13b30-default-rtdb.firebaseio.com",
      projectId: "kwitter-13b30",
      storageBucket: "kwitter-13b30.appspot.com",
      messagingSenderId: "876929489387",
      appId: "1:876929489387:web:1145a2310a6f8ecde861ae"
    };
    
   
   firebase.initializeApp(firebaseConfig);
   var user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";

   function addRoom(){
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="game_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
console.log(Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML+=row;
      
      });});}
getData();

function redirect(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
