var firebaseUrl = 'https://projekat-b55d8-default-rtdb.firebaseio.com';
var brojac = 0
var brojac2 = 0


function sviKorisnici() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        korisnici = []
        console.log(korisnici)
        korisnici = JSON.parse(request.responseText)
        for (let i in korisnici) {
          let korisnik = korisnici[i];
          appendKorisnika("tabela",korisnik,brojac,i);
          brojac +=1;
        }
      } else {
        alert("Greška prilikom učitavanja korisnika.");
      }
    }
  };

  request.open("GET", firebaseUrl + "/korisnici.json");
  request.send();
}

  function sviCentri() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          centri = JSON.parse(request.responseText);
          for (let i in centri) {
            let centar = centri[i];
            appendCentar("tabelacentar",centar,brojac2,i);
            brojac2 +=1;
          }
        } else {
          alert("Greška prilikom učitavanja centara.");
        }
      }
    };
  
    request.open("GET", firebaseUrl + "/fitnesCentri.json");
    request.send();
  }
  sviCentri();


  function deleteKor(deleteButton) {
    let korId = deleteButton.getAttribute("data-id");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
        } else {
          alert("Greška prilikom brisanja korisnika.");
        }
      }
    };
  
    request.open("DELETE", firebaseUrl + "/korisnici/" + korId + ".json");
    request.send();
  }
  function deleteTer(deleteButton) {
    let terId = deleteButton.getAttribute("data-id");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
        } else {
          alert("Greška prilikom brisanja korisnika.");
        }
      }
    };
  
    request.open("DELETE", firebaseUrl + "/fitnesCentri/" + terId + ".json");
    request.send();
  }



  function appendCentar(tBody,centar,brojac2,i) {
    let Row = document.createElement("tr");
    let naziv = document.createElement("td");
    naziv.innerText = centar.naziv;
    Row.appendChild(naziv);
    let godOtvaranja = document.createElement("td");
    godOtvaranja.innerText = centar.godinaOtvaranja;
    Row.appendChild(godOtvaranja);
    let brojTreninga = document.createElement("td");
    brojTreninga.innerText = centar.brojDostupnihTreninga;
    Row.appendChild(brojTreninga);
    let clanarina = document.createElement("td");
    clanarina.innerText = centar.mesecnaClanarina;
    Row.appendChild(clanarina);
    let adresa = document.createElement("td");
    adresa.innerText = centar.adresa;
    Row.appendChild(adresa);
    let ocena = document.createElement("td");
    ocena.innerText = centar.prosecnaOcena;
    Row.appendChild(ocena);
    let DeleteUserTd = document.createElement("td");
    let deleteButton = document.createElement('button')
    let text = document.createTextNode('Delete Center')
    deleteButton.appendChild(text)
    deleteButton.classList.add('pointer')
    deleteButton.setAttribute('data-id',i)
    DeleteUserTd.appendChild(deleteButton)
    Row.appendChild(DeleteUserTd)
    let editButton = document.createElement('button')
    let EditUserTd = document.createElement("td");
    let text1 = document.createTextNode('Edit Center')
    editButton.appendChild(text1)
    editButton.classList.add('pointer')
    EditUserTd.appendChild(editButton)
    Row.appendChild(EditUserTd)
    document.getElementById(tBody).appendChild(Row);
    deleteButton.addEventListener('click',function(){
      if(confirm("Are you sure you want to delete this row?")){
        deleteTer(deleteButton);
        alert("Teretana uspesno obrisana!")
      }
    })
    editButton.addEventListener('click',function(){
      let url = "fitnessCentar.html"
      window.document.location = url + "?=" + brojac2
    })
  }

function appendKorisnika(tBody,korisnik,brojac,i) {
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
    deleteButton.type = "button"
    deleteButton.setAttribute("data-id",i)
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
    let deactivateUser = document.createElement('td')
    let text3 = document.createTextNode('Deactivate User')
    let deactivateButton = document.createElement('button')
    deactivateButton.appendChild(text3)
    deactivateButton.classList.add('pointer')
    deactivateUser.append(deactivateButton)
    Row.appendChild(deactivateUser)
    document.getElementById(tBody).appendChild(Row);
    deleteButton.addEventListener('click',function(){
      if(confirm("Are you sure you want to delete this row?")){
        deleteKor(deleteButton);
        alert("Korisnik uspesno obrisan!")
      }
    })
    editButton.addEventListener('click',function(){
      let url = "korisnici.html"
      window.document.location = url + "?=" + brojac
    })
    deactivateButton.addEventListener('click',function(){
      confirm('Are you sure you want to deactivate this user?')
    })
    profileButton.addEventListener('click',function(){
      let url = "korisniciprofil.html"
      window.document.location = url + "?=" + brojac
    })
  }



window.addEventListener('load', sviKorisnici);
