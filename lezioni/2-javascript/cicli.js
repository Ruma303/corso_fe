const rs = require('readline-sync');
console.clear()

let allievi = [{
  nome: "Cristiano",
  cognome: "Damiani",
  anni: 28
},
{
  nome: "Domenico",
  cognome: "Cipriano",
  anni: 45
},
{
  nome: "Matteo Emanuele",
  cognome: "Russo",
  anni: 30
}
];

for (let i = 0; i < allievi.length; i++) {
  console.log(`Allievo ${i + 1}:`);
  console.log(`Nome: ${allievi[i].nome}`);
  console.log(`Cognome: ${allievi[i].cognome}`);
  console.log(`Anni: ${allievi[i].anni}`);
  console.log('-------------------');
}
