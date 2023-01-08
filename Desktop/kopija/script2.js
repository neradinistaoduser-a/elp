var teretane = []
var firebaseUrl = 'https://projekat-b55d8-default-rtdb.firebaseio.com';
console.log(teretane)

function atributiTer() {
    let id = window.document.location.href.slice(-1)
    let naslov = document.getElementById('naslov')
    naslov.innerHTML = `${teretane[id].naziv}`
    let slika = document.getElementById('slika')
    slika.src = `${teretane[id].slika}`
    let adresa = document.getElementById('adresa')
    adresa.innerHTML = `${teretane[id].adresa}`
    let godOtvaranja = document.getElementById('godotvaranja')
    godOtvaranja.innerHTML = `${teretane[id].godinaOtvaranja}`
    let brojTreninga = document.getElementById('brojTreninga')
    brojTreninga.innerHTML = `${teretane[id].brojDostupnihTreninga}`
    let clanarina = document.getElementById('clanarina')
    clanarina.innerHTML = `${teretane[id].mesecnaClanarina}`
    let prosnaOcena = document.getElementById('prosecnaocena')
    prosnaOcena.innerHTML = `${teretane[id].prosecnaOcena}`
  }
function ter() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          objekat = JSON.parse(request.responseText);
          for (let i in objekat) {
            teretane.push(objekat[i])
          }
          atributiTer()
            
          
        } else {
          alert("Greška prilikom učitavanja teretane.");
        }
      }
    };
  
    request.open("GET", firebaseUrl + "/fitnesCentri.json");
    request.send();
}

window.addEventListener('load', ter)