// INPUT
var inputNome = document.getElementById('input-nome');
var inputKm = document.getElementById('input-km');
var inputEta = document.getElementById('input-eta');
var buttonGenera = document.getElementById('input-genera');
var buttonAnnulla = document.getElementById('input-annulla');

// BIGLIETTO
var biglietto = document.getElementById('biglietto');

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

    // Calcolo prezzo del biglietto standard
    var prezzo = inputKmValue * 0.21;
    var offerta = 'standard'

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
    biglNome.innerHTML = inputNome.value;

    // offerta
    biglOfferta.innerHTML = offerta;

    // prezzo
    biglPrezzo.innerHTML = prezzo.toFixed(2) + ' euro';

    // Visualizzazione biglietto
    biglietto.className = 'visible';
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
    inputEta.value = 'maggiorenne';

    // Annullamento offerta
    biglOfferta.innerHTML = '';

    // Annullamento prezzo
    biglPrezzo.innerHTML = '';

    // Annullamento biglietto
    biglietto.className = 'hidden';
  }
)
