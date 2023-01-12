var firebaseUrl = 'https://projekat-b55d8-default-rtdb.firebaseio.com';
var korisnici = []
function atributiKor() {

    let id = window.document.location.href.slice(-1)
    
    let ime = document.getElementById('ime')
    ime.value = `${korisnici[id].ime}`

    let naslov = document.getElementById('naslovA')
    naslov.innerHTML = `${korisnici[id].ime}`

    let prezime = document.getElementById('prezime')
    prezime.value = `${korisnici[id].prezime}`

    let korIme = document.getElementById('korisnickoime')
    korIme.value = `${korisnici[id].korisnickoIme}`


    let email = document.getElementById('email')
    email.value = `${korisnici[id].email}`

    let lozinka = document.getElementById('lozinka')
    lozinka.value = `${korisnici[id].lozinka}`

    let datum = document.getElementById('datum')
    datum.value = `${korisnici[id].datumRodjenja}`

    let adresa = document.getElementById('adresa')
    adresa.value = `${korisnici[id].adresa}`

    let telefon = document.getElementById('telefon')
    telefon.value = `${korisnici[id].telefon}`
    
  }

function kor() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          objekat = JSON.parse(request.responseText);
          for (let i in objekat) {
            let korisnicko = objekat[i]
            korisnici.push(korisnicko)
          }
          atributiKor()
          
            
          
        } else {
          alert("Greška prilikom učitavanja korisnika.");
        }
      }
    };
  
    request.open("GET", firebaseUrl + "/korisnici.json");
    request.send();
}

window.addEventListener('load', kor)