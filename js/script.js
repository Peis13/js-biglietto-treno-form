// DATI
var euroKm = 0.21;

var km = parseInt( prompt( "quanti km vuoi fare?" ));

var anni = prompt( "quanti anni hai?" );

var lunghezzaAnni = anni.length;

var ticketShown = document.getElementById("ticket");
// FINE DATI

// LOGICA
// Condizioni per viaggiare

// controllo età
if (( lunghezzaAnni > 3 ) || ( lunghezzaAnni < 2 ) || ( parseInt( anni ) == 0 )) {
  alert( "inserisci un'età corretta" )
  ticketShown.innerHTML = "Ricarica la pagina";
  
  // controllo vecchiaia
} else if ( parseInt( anni ) > 120 ) {
  alert( "Forse sei un po' grandicello per viaggiare in treno" )
  ticketShown.innerHTML = "Ricarica la pagina";
  
  // controllo chilometraggio
} else if ( km == 0 ) {
  alert( "inserisci chilometraggio corretto" )
  ticketShown.innerHTML = "Ricarica la pagina";
  
} else {

  // Controllo inserimento dati
  if ( isNaN( km ) || isNaN( anni )) {
    ticketShown.innerHTML = "Non è stato possibile calcolare il prezzo del biglietto";

    // Calcolo dei vari prezzi di biglietto
  } else {

    anni = parseInt( anni );

    // prezzo intero
    var ticket = ( km * euroKm );

    // Prezzo del ticket in base agli anni
    if ( anni < 18 ) {

      // minorenne
      var minorsTicket = ticket - ( ticket * ( 20 / 100 ));
      ticket = minorsTicket;

    } else if ( anni > 65 ) {

      // over 65
      var over65Ticket = ticket - ( ticket * ( 40 / 100 ));
      ticket = over65Ticket;
    }

    ticketShown.innerHTML = "Il prezzo del biglietto è : " + ticket.toFixed(2) + "$";
  }
}

// FINE LOGICA
