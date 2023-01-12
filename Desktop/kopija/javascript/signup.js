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


var database = firebase.database();


var form = document.getElementById("registration-form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var username = document.getElementById('username').value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById('date').value;
    var adress = document.getElementById('adress').value;
    var number = document.getElementById('number').value;

    database.ref("korisnici").push({
        ime: name,
        prezime: surname,
        korisnickoIme:username,
        email: email,
        lozinka: password,
        datumRodjenja: date,
        adresa: adress,
        telefon: number}) 

});


batn = document.getElementById('batn');
batn.addEventListener("click",function(){
    alert("Uspesna registracija!");
    document.getElementById('popup-signup').style.display = "none";
})

