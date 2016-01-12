function Artikal(naziv, cijena, kol) {

  this.naziv = naziv;
  this.cijena = cijena;
  this.kol = kol;
  this.ukupno = cijena * kol;
}

var artPrehrana = [];
var artOstalo = [];

function dodajUkupno(vrsta, dodatak) {

  var ukupno = parseInt(document.getElementById("sveUk").innerHTML);
  var iznos;

  if(vrsta === 'prehrana') {
    var prehUkupno = parseInt(document.getElementById("prehUk").innerHTML);
    document.getElementById("prehUk").innerHTML = prehUkupno + dodatak + " kn";
  } else if(vrsta === 'ostalo') {
    var ostUkupno = parseInt(document.getElementById("ostUk").innerHTML);
    document.getElementById("ostUk").innerHTML = ostUkupno + dodatak + " kn";
  }

    iznos = ukupno + dodatak;
    document.getElementById("sveUk").innerHTML = iznos.toFixed(2) + " kn";
    return 1;
}

function upisiArtikal(vrsta, artikal) {

  var table = document.getElementById(vrsta);
  var row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = artikal.naziv;
  cell2.innerHTML = artikal.cijena.toFixed(2) + " kn";
  cell3.innerHTML = artikal.kol;
  cell4.innerHTML = artikal.ukupno.toFixed(2) + " kn";

  dodajUkupno(vrsta, artikal.ukupno);
  return 1;
}

function dodajArtikal(arg1) {

  var naziv = document.getElementById("nazArt").value;
  var cijena = parseFloat(document.getElementById("cijArt").value);
  var kol = parseInt(document.getElementById("kolArt").value);

  if(!cijena || !kol) {
      document.getElementById("myText").innerHTML = "Upisali ste premalen iznos!";
      return 0;
  }

  var artikal = new Artikal(naziv, cijena, kol);

  if(arg1 === 'prehrana') {

    artPrehrana.push(artikal);
    document.getElementById("myText").innerHTML = "Artikl uspjesno dodan!";
    upisiArtikal(arg1, artPrehrana[artPrehrana.length - 1]);
    return 1;

  }
  else if (arg1 === 'ostalo') {

    artOstalo.push(artikal);
    document.getElementById("myText").innerHTML = "Artikl uspjesno dodan!";
    upisiArtikal(arg1, artOstalo[artOstalo.length - 1]);
    return 1;

  } else {

    document.getElementById("myText").innerHTML = "Upisali ste premalen iznos!";
    return 0;
  }
}
