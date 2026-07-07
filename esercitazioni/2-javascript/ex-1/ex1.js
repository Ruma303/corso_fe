/*
Realizzare un'applicazione da console che simula una gestione utenti, con un menu interattivo che permetta all’utente di:

Aggiungere un nuovo utente (inserendo nome, cognome, anni, hobby)
nome e cognome saranno una stringa, anni un numero, hobby una stringa

Visualizzare la lista utenti

Cercare utenti per nome (elencare quelli con quel nome)
Cercare utenti per cognome (elencare quelli con quel cognome)
Cercare utenti per nome e cognome nome (elencare quelli con quei nome e cognome)
Cercare utenti per età (con quella eta)
Cercare utenti per età superiore (con più quella eta)
Cercare utenti per età inferiore (con più quella eta)

Generare la tabellina del numero di utenti registrati

Uscire dal programma
*/
const fs = require('fs');
const rs = require('readline-sync');
console.clear();

let utenti = [
  {
    nome: "Cristiano",
    cognome: "Damiani",
    anni: 28,
    hobby: "tennis",
  },
  {
    nome: "Domenico",
    cognome: "Cipriano",
    anni: 45,
    hobby: "basket",
  },
  {
    nome: "Matteo Emanuele",
    cognome: "Russo",
    anni: 30,
    hobby: "coding"
  }
];

function cercaUtente() {
  let nome = rs.question("Digita il nome di un utente per nome:\n").toUpperCase();
  console.log("Nome modificato in ingresso: " , nome)

  let nomeDaCercare = utenti[1].nome.toUpperCase();
  console.log("Nome da confrontare", nomeDaCercare)

  let utente = utenti.find((utente) => "DOMENICO" === "DOMENICO");
  console.log(utente ? `Utente trovato: ${utente.nome}` : "Utente non trovato");
}

mostraMenu();

function mostraMenu() {
  let scelta;
  do {
    console.log(`
    1) Visualizza utenti
    2) Inserisci utente
    3) Cerca utente
    4) Numero utenti
    5) Esci
    `)
    scelta = rs.questionInt("Quale azione vuoi intraprendere? ");
    console.log("\n");
    switch (scelta) {
      case 1: mostraUtenti(utenti); break;
      case 2: aggiungiUtente(); break;
      case 3: cercaUtente(); break;
      case 4: console.log(`Numero utenti: ${utenti.length}`); break;
      case 5: console.log("Grazie per aver usato il programma!"); return;
      default:
        console.log("Opzione non corretta");
        break;
    }
  } while (true);
}

function mostraUtenti(utenti) {
  utenti.forEach((utente, index) => {
    console.log((index + 1) + ") " + `Nome e cognome: ${utente.nome}, ${utente.cognome}, età: ${utente.anni}, hobby: ${utente.hobby}`);
  });
}

function aggiungiUtente() {
  let utente = {
    nome: rs.question("Inserisci il nome: \n"),
    cognome: rs.question("Inserisci il cognome: \n"),
    anni: rs.questionInt("Inserisci età: \n"),
    hobby: rs.question("Inserisci degli hobby separati da spazi: \n"),
  }
  utenti.push(utente);
}

// Opzionalmente, salvare su un file esterno