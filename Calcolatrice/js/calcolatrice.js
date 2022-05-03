function cancella() {
  document.getElementById("risultato").value = "";
}

function display(valore) {
  document.getElementById("risultato").value += valore;
}

function uguale() {
  let espressione = document.getElementById("risultato").value;
  let risultatoFinale = eval(espressione);
  document.getElementById("risultato").value = risultatoFinale;
}

function tastoDisabilitato() {
  document.getElementById("moltiplicatore").disabled = true;
  document.getElementById("divisore").disabled = true;
  document.getElementById("minuendo").disabled = true;
  document.getElementById("addizione").disabled = true;
}
//La funzione tastoDisabilitato è stata generata per far in modo che una volta premuto un operatore
//vengano disattivati tutti gli altri operatori , così da non generare sequenze di operatori che risulterebbero
//un errore per il calcolo dell'operazione

function tastoAbilita() {
  document.getElementById("moltiplicatore").disabled = false;
  document.getElementById("divisore").disabled = false;
  document.getElementById("minuendo").disabled = false;
  document.getElementById("addizione").disabled = false;
}
//L'operazione tastoAbilita è stata generata per far in modo che dopo aver selezionato un numero gli operatori
//possano tornare a disposizione dell'utente per un proseguo nel calcolo dell'operazione
