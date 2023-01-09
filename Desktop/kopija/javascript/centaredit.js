var firebaseUrl = 'https://projekat-b55d8-default-rtdb.firebaseio.com';
var centri = []
function atributiTer() {

    let id = window.document.location.href.slice(-1)
    
    let naziv = document.getElementById('naziv')
    naziv.value = `${centri[id].naziv}`

    let naslov = document.getElementById('naslovA')
    naslov.innerHTML = `${centri[id].naziv}`
 
    let godina = document.getElementById('godina')
    godina.value = `${centri[id].godinaOtvaranja}`

    let trening = document.getElementById('trening')
    trening.value = `${centri[id].brojDostupnihTreninga}`

    let clanarina = document.getElementById('clanarina')
    clanarina.value = `${centri[id].mesecnaClanarina}`

    let adresa = document.getElementById('adresa')
    adresa.value = `${centri[id].adresa}`

    let ocena = document.getElementById('ocena')
    ocena.value = `${centri[id].prosecnaOcena}`




    
  }

function ter() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          objekat = JSON.parse(request.responseText);
          for (let i in objekat) {
            let centar = objekat[i]
            centri.push(centar)
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

let dugme = document.getElementById('dugme')
dugme.addEventListener('click',function(){
  confirm("Are you sure you want to edit this center?")
})
console.log(centri)

window.addEventListener('load', ter)