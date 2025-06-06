// Richiesta con fetch al server Express

let promise = fetch("http://localhost:8000/api/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore lanciato manualmente");
    }
    console.log(response.status);
    return response.json();
  })
  .then((data) => console.log("Risorsa trovata: ", data))
  .catch((error) => console.error("Errore nell'elaborazione: ", error));

console.log(promise)

async function onClickLoadContent() {
  let promise = await fetch("http://localhost:8000/api/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore lanciato manualmente");
      }
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log("Risorsa trovata: ", data))
    .catch((error) => console.error("Errore nell'elaborazione: ", error));

  console.log(promise)

  /* for await (let value of promise) {
    console.log(value)
  } */
}
onClickLoadContent()

// Richiesta con JSON-server:
// usare npx json-server --watch db/db.json
// con il terminale da questa cartella

/* fetch("http://localhost:3000/1", {
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
  }) */


/* class MyClass {

  constructor(func, add) {
    this.func = func
    this.add = add
  }
}

// ------------------

function add(a, b) {
  return a + b
}

let myClass = new MyClass(
  (a, b) => {
    return a + b
  },
  add
)

let tappost = true

//* Prima promise
let result = new Promise((resolve, reject) => {

  let richiesta = fetch("......")

  if (tappost) {
    resolve("Promise risolta")
  } else {
    reject("Promise non risolta")
  }
})
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log("finally")
  })


function stacazzodepromise(resolve, reject) {
  if (tappost) {
    resolve("Promise risolta")
  } else {
    reject("Promise non risolta")
  }
}

class MyPromise {
  constructor(params) {
    this.params = params
  }
}

//* Seconda promise
let myPromise = new MyPromise(stacazzodepromise)


Promise.all([result, myPromise])
.then((data) => {
  console.log("mie trasformaioni...")
  console.log("invio risposta")
}).catch((error) => {
  console.log(error)
})

Promise.allSettled([result, myPromise])
.then((data) => {
  console.log("mie trasformaioni...")
  console.log("invio risposta")
}).catch((error) => {
  console.log(error)
})

Promise.race([result, myPromise])
.then((data) => {
  console.log("Almeno una promise è stata risolta o rifiutata")
}).catch((error) => {
  console.log(error)
})

Promise.any([result, myPromise])
.then((data) => {
  console.log("Almeno una promise é stata risolta")
}).catch((error) => {
  console.log(error, "AggregateError")
})

// ----

 */