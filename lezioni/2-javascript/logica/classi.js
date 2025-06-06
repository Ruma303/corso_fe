class Persona {
  // proprietà
  nome;
  cognome;
  eta;

  constructor(nome = "Sconosciuto", cognome = "Sconosciuto", eta = 3000) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }

  // metodo
  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome} e ho ${this.eta} anni.`);
  }
}

class Studente extends Persona {
  // proprietà
  matricola;

  constructor(nome, cognome, eta, matricola) {
    super(nome, cognome, eta); // chiama il costruttore della classe base
    this.matricola = matricola;
  }

  // metodo
  saluta() {
    super.saluta(); // chiama il metodo saluta della classe base
    console.log(`La mia matricola é ${this.matricola}.`);
  }
}
console.clear();

let s1 = new Studente("Mario", "Rossi", 20, "12345");
s1.saluta(); // Ciao, sono Mario Rossi e ho 20 anni. La mia matricola è 12345.

/*
console.clear();
let p1 = new Persona("Mario", "Rossi", 30);
let p2 = new Persona("Luigi", "Verdi", 25);
let p3 = new Persona("Anna", "Bianchi", 28);
let p = new Persona(); // Sconosciuto, Sconosciuto, 3000

p1.saluta(); // Ciao, sono Mario Rossi e ho 30 anni.
p2.saluta(); // Ciao, sono Luigi Verdi e ho 25 anni.
p3.saluta(); // Ciao, sono Anna Bianchi e ho 28 anni.
p.saluta(); // Ciao, sono Sconosciuto Sconosciuto e ho 3000 anni.

*/