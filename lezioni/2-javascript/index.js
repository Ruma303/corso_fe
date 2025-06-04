const rs = require('readline-sync');
console.clear()
let ripeti = "SI";
while (ripeti == "SI") {

  let base = rs.questionInt("Inserisci il numero della tabellina: ");
  console.log(`Tabellina del ${base}:`);
  let n = 1;
  let repeat = true;
  while (n <= 10) {
    console.log(`${base} x ${n} = ${base * n}`);
    n++;
  }

  console.log("FINE DELLA TABELLA");

  do {
    ripeti = rs.question("Vuoi ripetere? (SI/NO): ").toUpperCase();
    if (ripeti != "SI" && ripeti != "NO") {
      console.log("Risposta non valida. Inserisci SI o NO.");
    }
  } while (ripeti != "SI" && ripeti != "NO")

}

console.log("Grazie per aver usato il programma!");