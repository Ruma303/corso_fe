fetch("http://localhost:8000/api/user")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore lanciato manualmente");
    }
    return response.json();
  })
  .then((data) => console.log("Risorsa trovata: ", data))
  .catch((error) => console.error("Errore nell'elaborazione: ", error));