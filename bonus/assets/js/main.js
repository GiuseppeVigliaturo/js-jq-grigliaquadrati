/*Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
gli altri diventano verdi (tutti i rimanennti)
Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti*/

var userName = prompt("CIAO INSERISCI IL TUO NOME");
var verificato = false;
var i=0;
var j=0;
var listarossi= [];
var numGenerato;


while (verificato === false) {
  var sesso = prompt("scegli il sesso");

  if (sesso === "maschio") {
    $(".concorrente").css("color","blue"); //lettura della regola css
    verificato = true;
  }else if (sesso === "femmina") {
    $(".concorrente").css("color","pink"); //lettura della regola css
    verificato = true;
  }else {
    alert("non hai inserito un valore valido");
  }
}
alert("Ciao  " + userName + "  in questo gioco devi indovinare il maggior numero possibile di quadrati rossi");

$(".concorrente").text("concorrente   " + userName);


var R=0;
var V=0;
var punteggio = 0;
$( document ).ready(function() {


  //   //assegno classi random

while (listarossi.length < 15) { //finchè il mio array non arriva a 16 tu continua a popolarlo
numGenerato = numRandom(1,64); //generami numeri casuali da 1 a 100 alla volta

if (listarossi.includes(numGenerato) == false) { //se il numero è già presente dimmelo
  listarossi.push(numGenerato); //pusha il numero nell'array
}

}

console.log(listarossi);

  $(".grid-item").each(function(i) {

for (var j = 0; j < listarossi.length; j++) {
  if (listarossi.includes(i)){
    $(this).addClass("red");
  }
  else {
    $(this).addClass("green");
  }
}

});

    $(".grid-item").click(function(){
      //con un if verifico se ho cliccato sulla cella vedendo se ha già una
      // classe cliccato se non ce l'ha allora la aggiungo con addClass e non posso più ricliccarci
        if ($(this).hasClass("red") && !$(this).hasClass("cliccato")) {



            $(this).css("background", "red");
            //se è la prima volta che lo clicco cambio il colore
            //di sfondo in base alla classe colore che ho inserito prima
            $(this).addClass("cliccato");
            //se è la prima volta che lo clicco allora gli aggiungo la classe cliccato
            R++;
            punteggio += 1;
            //da cancellare poi
            if (R === 14) {
              alert("te ne manca uno ma tanto non lo trovi ");
            }
            document.getElementById('puntirossi').innerHTML =R;
            document.getElementById('punteggio').innerHTML ="il tuo punteggio attuale è: " + punteggio;

        }

        else if ($(this).hasClass("green") && !$(this).hasClass("cliccato")) {


            $(this).css("background", "green");
            //se è la prima volta che lo clicco cambio il colore
            //di sfondo in base alla classe colore che ho inserito prima
            $(this).addClass("cliccato");
            //se è la prima volta che lo clicco allora gli aggiungo la classe cliccato
            V++;
            punteggio -= 1;

            document.getElementById('puntiverdi').innerHTML = V;

            if (punteggio <= 0) {
              punteggio = 0;
            }else {
              punteggio -= 1;
            }
            document.getElementById('punteggio').innerHTML ="il tuo punteggio attuale è: " + punteggio;

        }

        else if ($(this).hasClass("cliccato")) {
           alert("ma sei caduto da piccolo non vedi che è gia colorato");
         }

    });
});



//funzioni
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// $(".grid-item").each(function() {
//     var number = numRandom(1,64);;
//     $(this).addClass("numero-" + number.toString());
// });
