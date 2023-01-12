var firebaseUrl = "https://projekat-b55d8-default-rtdb.firebaseio.com";
var teretane = [];
let ids = window.document.location.href.split("?=");
var treninzi = [];
testala = []

function atributiTre() {
  let naslov = document.getElementById("naslov");
  naslov.innerHTML = treninzi[ids[2]].naziv;
  let opis = document.getElementById('opis')
  opis.innerHTML = treninzi[ids[2]].opis
  let zanr = document.getElementById('zanr')
  zanr.innerHTML = treninzi[ids[2]].zanr
  let trajanje = document.getElementById('trajanje')
  trajanje.innerHTML = treninzi[ids[2]].trajanje + " minuta"
  let maxOsobe = document.getElementById('maxosobe')
  maxOsobe.innerHTML = treninzi[ids[2]].maxOsobe 
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
        atributiTre();
      } else {
        alert("Greška prilikom učitavanja treninga.");
      }
    }
  };

  request.open("GET",firebaseUrl + `/treninzi/${teretane[ids[1]]?.idTreninga}.json`
  );
  request.send();
}

window.addEventListener("load", ter);
