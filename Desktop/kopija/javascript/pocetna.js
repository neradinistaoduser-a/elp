var firebaseUrl = 'https://projekat-b55d8-default-rtdb.firebaseio.com';
var brojac = 0

function funkcija() {
    function sviPodaci() {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            podaci = JSON.parse(request.responseText);
            for (let i in podaci) {
              let podatak = podaci[i];
              appendPodatak(podatak, brojac);
              brojac+= 1
            }
          } else {
            alert("Greška prilikom učitavanja teretane.");
          }
        }
      };
    
      request.open("GET", firebaseUrl + "/fitnesCentri.json");
      request.send();
    }
    sviPodaci();
    }

function appendPodatak(podatak, brojac){
    var idTreninga = podatak.idTreninga
    var divGlavni = document.getElementById('columns');
    var prviDiv = document.createElement('div');
    prviDiv.setAttribute('id',idTreninga)
    prviDiv.classList.add('column');
    var slika = document.createElement('img');
    slika.classList.add('gymlogo');
    slika.src = podatak.slika;
    var br = document.createElement('br')
    var br1 = document.createElement('br')
    var p = document.createElement('p')
    p.innerHTML = podatak.naziv
    var button = document.createElement('button')
    var text = document.createTextNode('Read More')
    var a = document.createElement('a')
    var paragrafocena = document.createElement('h3') 
    paragrafocena.innerHTML = 'Ocena: ' + podatak.prosecnaOcena
    button.classList.add('saznajvise')
    p.classList.add("pter")
    a.appendChild(button)
    prviDiv.appendChild(p)
    prviDiv.appendChild(paragrafocena)
    button.appendChild(text)
    prviDiv.appendChild(slika);
    prviDiv.appendChild(br)
    prviDiv.appendChild(br1)
    prviDiv.appendChild(a)
    divGlavni.appendChild(prviDiv);
    a.addEventListener('click', ()=> {
      let url = "TERETANE.html"
      window.document.location = url + "?=" + brojac
    })
    
  }




window.addEventListener('load', funkcija)

