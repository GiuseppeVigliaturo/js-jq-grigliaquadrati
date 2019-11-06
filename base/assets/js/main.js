/*Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
gli altri diventano verdi (tutti i rimanennti)
Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti*/


var R=0;
var V=0;
$( document ).ready(function() {

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
            document.getElementById('puntirossi').innerHTML =R ;

        }else if ($(this).hasClass("green") && !$(this).hasClass("cliccato")) {

            $(this).css("background", "green");
            //se è la prima volta che lo clicco cambio il colore
            //di sfondo in base alla classe colore che ho inserito prima
            $(this).addClass("cliccato");
            //se è la prima volta che lo clicco allora gli aggiungo la classe cliccato
            V++;
            document.getElementById('puntiverdi').innerHTML =V;
        }
    });
});
