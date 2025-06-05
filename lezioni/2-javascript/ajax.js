// Richiesta con fetch al server Express

fetch("http://localhost:8000/api/user")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore lanciato manualmente");
    }
    return response.json();
  })
  .then((data) => console.log("Risorsa trovata: ", data))
  .catch((error) => console.error("Errore nell'elaborazione: ", error));


// Richiesta con JSON-server:
// usare npx json-server --watch db/db.json
// con il terminale da questa cartella

fetch("http://localhost:3000/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Risorsa trovata: ", data);
  })
  .catch((error) => {
    console.error("Errore nell'elaborazione: ", error);
  })