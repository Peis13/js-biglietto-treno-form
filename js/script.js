// INPUT
var inputNome = document.getElementById('input-nome');
var inputKm = document.getElementById('input-km');
var inputEta = document.getElementById('input-eta');
var buttonGenera = document.getElementById('input-genera');
var buttonAnnulla = document.getElementById('input-annulla');

// OUTPUT
var biglietto = document.getElementById('biglietto');
var errore = document.getElementById('errore');
var messaggioErrore = document.getElementById('messaggio-errore');

// DATI BIGLIETTO
var biglNome = document.getElementById('bigl-nome');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCodice = document.getElementById('bigl-codice');
var biglPrezzo = document.getElementById('bigl-prezzo');

// Click su GENERA
buttonGenera.addEventListener('click',
  function() {

    // Assegnazione valori
    var inputKmValue = inputKm.value;
    var inputEtaValue = inputEta.value;

    if (true) {

    }

    // Calcolo prezzo del biglietto standard
    var prezzo = inputKmValue * 0.21;
    var offerta = 'standard'

    // Assegnazione carrozza da 1-10
    var carrozza = (Math.floor(Math.random() * 10) + 1).toString();

    // Assegnazione mese corrente pre formare il PNR 1-12
    var day = new Date();
    var mese = (day.getMonth() + 1).toString();

    // Assegnazione codice PNR (mese + 1-100)
    var codicePNR = mese + (Math.floor(Math.random() * 100)).toString();

    // Assegnazione codice CP
    var codiceCP = carrozza + codicePNR;

    // Calcolo offerte
    if ( inputEtaValue == 'minorenne') {

      // under 18
      prezzo = prezzo - ( prezzo * 20 / 100);
      offerta = 'under 18';

    } else if ( inputEtaValue == 'over' ) {

      // over 65
      prezzo = prezzo - ( prezzo * 40 / 100);
      offerta = 'over 65';

    } else if ( inputEtaValue == 'default' ) {

      // default
      biglPrezzo.innerHTML = 'seleziona una fascia di età';
      offerta = '';
    }

    // COMPILAZIONE BIGLIETTO
    // nome
    biglNome.innerHTML = inputNome.value;

    // offerta
    biglOfferta.innerHTML = offerta;

    // carrozza
    biglCarrozza.innerHTML = carrozza;

    // codice CP
    biglCodice.innerHTML = codiceCP;

    // prezzo
    if ( inputEtaValue !== 'default' ) {
      biglPrezzo.innerHTML = prezzo.toFixed(2) + ' euro';
    }

    // Visualizzazione biglietto
    biglietto.className = 'box visible';
  }
)

// Click su ANNULLA
buttonAnnulla.addEventListener('click',
  function() {

    // Annullamento nome
    inputNome.value = '';
    biglNome.innerHTML = '';

    // Annullamento km
    inputKm.value = '';

    // Annullamento età
    inputEta.value = 'default';

    // Annullamento offerta
    biglOfferta.innerHTML = '';

    // Annullamento prezzo
    biglPrezzo.innerHTML = '';

    // Annullamento biglietto
    biglietto.className = 'hidden';
  }
)
