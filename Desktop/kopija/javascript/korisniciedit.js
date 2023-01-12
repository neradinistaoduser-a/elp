const firebaseConfig = {
  apiKey: "AIzaSyCeY-gfJoqNTkaeHz0tepcnui2qWeBTceI",
  authDomain: "projekat-b55d8.firebaseapp.com",
  databaseURL: "https://projekat-b55d8-default-rtdb.firebaseio.com",
  projectId: "projekat-b55d8",
  storageBucket: "projekat-b55d8.appspot.com",
  messagingSenderId: "1077574000246",
  appId: "1:1077574000246:web:0314cf6b36b2bf97e24957"
};

firebase.initializeApp(firebaseConfig);

let id = window.document.location.href.slice(-1)
idint = parseInt(id)
var database = firebase.database();
var dataRef = database.ref("korisnici");

dataRef.orderByChild("property_name").limitToFirst(idint+1).once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    console.log(key);
    var form = document.getElementById("edit-form");


    form.addEventListener("submit", function(e) {
      e.preventDefault(); 
    
      var name = document.getElementById("ime").value;
      var surname = document.getElementById("prezime").value;
      var username = document.getElementById('korisnickoime').value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("lozinka").value;
      var date = document.getElementById('datum').value;
      var adress = document.getElementById('adresa').value;
      var number = document.getElementById('telefon').value;
    
      database.ref("korisnici/" + key).set({
          ime: name,
          prezime: surname,
          korisnickoIme:username,
          email: email,
          lozinka: password,
          datumRodjenja: date,
          adresa: adress,
          telefon: number}) 
    
    }); 
  });
});

let dugme = document.getElementById('dugme')
dugme.addEventListener('click',function(){
  if (confirm("Are you sure you want to edit this user?")){
    alert("Edit sucessful!")
  }
})