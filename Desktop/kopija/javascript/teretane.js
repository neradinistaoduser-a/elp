var teretane = [];
var firebaseUrl = "https://projekat-b55d8-default-rtdb.firebaseio.com";
let id = window.document.location.href.slice(-1);
var treninzi = [];

function atributiTer() {
  let naslov = document.getElementById("naslov");
  naslov.innerHTML = `${teretane[id].naziv}`;
  let slika = document.getElementById("slika");
  slika.src = `${teretane[id].slika}`;
  let adresa = document.getElementById("adresa");
  adresa.innerHTML = `${teretane[id].adresa}`;
  let godOtvaranja = document.getElementById("godotvaranja");
  godOtvaranja.innerHTML = `${teretane[id].godinaOtvaranja}`;
  let brojTreninga = document.getElementById("brojTreninga");
  brojTreninga.innerHTML = `${teretane[id].brojDostupnihTreninga}`;
  let clanarina = document.getElementById("clanarina");
  clanarina.innerHTML = `${teretane[id].mesecnaClanarina}`;
  let prosnaOcena = document.getElementById("prosecnaocena");
  prosnaOcena.innerHTML = `${teretane[id].prosecnaOcena}`;
}
function ter() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        objekat = JSON.parse(request.responseText);
        Object.keys(objekat).map((key) =>
          teretane.push({ ...objekat[key], id: key })
        );
        af();
        atributiTer();
      } else {
        alert("Greška prilikom učitavanja teretane.");
      }
    }
  };

  request.open("GET", firebaseUrl + "/fitnesCentri.json");
  request.send();
}
function af() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        objekat = JSON.parse(request.responseText);
        Object.keys(objekat).map((key) =>
          treninzi.push({ ...objekat[key], id: key })
        );
        appendTrening(treninzi)
      } else {
        alert("Greška prilikom učitavanja treninga.");
      }
    }
  };

  request.open("GET",firebaseUrl + `/treninzi/${teretane[id]?.idTreninga}.json`
  );
  request.send();
}
function appendTrening(treninzi){
  treninzi.forEach((trening,index) => {
    var divGlavni = document.getElementById('columns');
    var prviDiv = document.createElement('div');
    var p = document.createElement('p')
    var kratkiopis = document.createElement('p')
    kratkiopis.innerHTML = trening.kratakOpis
    prviDiv.classList.add('column');
    p.innerHTML = trening.naziv
    var button = document.createElement('button')
    var text = document.createTextNode('Read More')
    var a = document.createElement('a')
    var hr = document.createElement('hr')
    hr.classList.add('hr1')
    var razmak = document.createElement('br')
    button.classList.add('saznajvise')
    p.classList.add("pter")
    a.appendChild(button)
    prviDiv.appendChild(p)
    prviDiv.appendChild(hr)
    prviDiv.appendChild(razmak)
    prviDiv.appendChild(kratkiopis)
    button.appendChild(text)
    prviDiv.appendChild(a)
    divGlavni.appendChild(prviDiv);
      a.addEventListener('click', ()=> {
        let url = "treninzi.html"
        window.document.location = url + "?=" + index
      })
  })
  
}
window.addEventListener("load", ter);


