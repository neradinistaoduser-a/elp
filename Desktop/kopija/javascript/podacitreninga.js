var firebaseUrl = "https://projekat-b55d8-default-rtdb.firebaseio.com";
var teretane = [];
let id = window.document.location.href.slice(-1);
var treninzi = [];

function atributiTre() {
    treninzi.forEach((trening) => {
    let naslov = document.getElementById("naslov");
    naslov.innerHTML = trening[id].naziv
  })
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
          atributiTre();
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
          atributiTre()
        } else {
          alert("Greška prilikom učitavanja treninga.");
        }
      }
    };
  
    request.open("GET",firebaseUrl + `/treninzi/${teretane[id]?.idTreninga}.json`
    );
    request.send();
  }

  window.addEventListener("load", ter);