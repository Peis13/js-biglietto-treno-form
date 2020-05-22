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
    var inputNomeValue = inputNome.value
    var inputKmValue = inputKm.value;
    var inputEtaValue = inputEta.value;

    // Controllo che tutti i campi siano stati compilati
    if ( (inputNomeValue == '') && (inputKmValue == '') && (inputEtaValue == 'default')) {

      // Visualizzazione errore
      messaggioErrore.innerHTML = 'Inserisci i dati';
      errore.className = 'box visible';

      // Nascondi biglietto
      biglietto.className = 'box hidden';

      // Controllo che il nome sia stato inserito
    } else if (inputNomeValue == '') {

      // Nascondi biglietto
      biglietto.className = 'box hidden';

      // Visualizzazione errore
      messaggioErrore.innerHTML = 'Inserisci il tuo nome';
      errore.className = 'box visible';

      // Controllo che i km siano stati inseriti
    } else if (inputKmValue == '') {

      // Nascondi biglietto
      biglietto.className = 'box hidden';

      // Visualizzazione errore
      messaggioErrore.innerHTML = 'Inserisci un valore numerico di km';
      errore.className = 'box visible';

      // Controllo che la fascia di età sia stata selezionata
    } else if (inputEtaValue == 'default') {

      // Nascondi biglietto
      biglietto.className = 'box hidden';

      // Visualizzazione errore
      messaggioErrore.innerHTML = 'Inserisci la fascia di età';
      errore.className = 'box visible';

      // Procedimento della compilazione del biglietto
    } else {

      // Nascondi errore
      errore.className = 'box hidden';

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
      }

      // COMPILAZIONE BIGLIETTO

      // nome
      biglNome.innerHTML = inputNomeValue;

      // offerta
      biglOfferta.innerHTML = offerta;

      // carrozza
      biglCarrozza.innerHTML = carrozza;

      // codice CP
      biglCodice.innerHTML = codiceCP;

      // prezzo
      biglPrezzo.innerHTML = prezzo.toFixed(2) + ' euro';

      // Visualizzazione biglietto
      biglietto.className = 'box visible';
    }
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

    // Annullamento errore
    errore.className = 'hidden';
  }
)
