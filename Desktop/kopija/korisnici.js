var firebaseUrl = 'https://projekat-b55d8-default-rtdb.firebaseio.com';
var brojac = 0
function funkcija() {
function sviKorisnici() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        korisnici = JSON.parse(request.responseText);
        for (let i in korisnici) {
          let korisnik = korisnici[i];
          appendKorisnika("tabela",korisnik,brojac);
          brojac +=1
        }
      } else {
        alert("Greška prilikom učitavanja korisnika.");
      }
    }
  };

  request.open("GET", firebaseUrl + "/korisnici.json");
  request.send();
}
sviKorisnici();
}

function appendKorisnika(tBody,korisnik,brojac) {
    let Row = document.createElement("tr");
    let korImeTd = document.createElement("td");
    korImeTd.innerText = korisnik.korisnickoIme;
    Row.appendChild(korImeTd);
    let ImeTd = document.createElement("td");
    ImeTd.innerText = korisnik.ime;
    Row.appendChild(ImeTd);
    let prezimeTd = document.createElement("td");
    prezimeTd.innerText = korisnik.prezime;
    Row.appendChild(prezimeTd);
    let emailTd = document.createElement("td");
    emailTd.innerText = korisnik.email;
    Row.appendChild(emailTd);
    let lozinkaTd = document.createElement("td");
    lozinkaTd.innerText = korisnik.lozinka;
    Row.appendChild(lozinkaTd);
    let datumTd = document.createElement("td");
    datumTd.innerText = korisnik.datumRodjenja;
    Row.appendChild(datumTd);
    let adresaTd = document.createElement("td");
    adresaTd.innerText = korisnik.adresa;
    Row.appendChild(adresaTd);
    let telefonTd = document.createElement("td");
    telefonTd.innerText = korisnik.telefon;
    Row.appendChild(telefonTd);
    let DeleteUserTd = document.createElement("td");
    let deleteButton = document.createElement('button')
    let text = document.createTextNode('Delete User')
    deleteButton.appendChild(text)
    deleteButton.classList.add('pointer')
    DeleteUserTd.appendChild(deleteButton)
    Row.appendChild(DeleteUserTd)
    let editButton = document.createElement('button')
    let EditUserTd = document.createElement("td");
    let text1 = document.createTextNode('Edit User')
    editButton.appendChild(text1)
    editButton.classList.add('pointer')
    EditUserTd.appendChild(editButton)
    Row.appendChild(EditUserTd)
    let userProfile = document.createElement("td");
    let text2 = document.createTextNode('User Profile')
    let profileButton = document.createElement('button')
    profileButton.appendChild(text2)
    profileButton.classList.add('pointer')
    userProfile.appendChild(profileButton)
    Row.appendChild(userProfile)
    document.getElementById(tBody).appendChild(Row);
    deleteButton.addEventListener('click',function(){
      confirm("Are you sure you want to delete the user?")
    })
    editButton.addEventListener('click',function(){
      let url = "korisnici.html"
      window.document.location = url + "?=" + brojac
    })
  }


window.addEventListener('load', funkcija)
