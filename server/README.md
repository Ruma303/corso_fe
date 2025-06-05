# Server Node.js con Express

Il seguente è un esempio molto semplice di server in Node.js + framework Express.js.

Per eseguire il server, è necessario avere Node.js installato, installare tutte le dipendenze `npm install` e poi eseguire il comando `npm run dev` oppure`npm run start`.

I server vengono attivati con `nodemon` in modalità sviluppo, che consente il riavvio automatico del server ad ogni modifica del codice.

Una volta avviato, il server sarà accessibile all'indirizzo `http://localhost:8000`.

Gli endpoint esposti sono i seguenti:

```http
GET `/` - Restituisce un messaggio di benvenuto.
GET `/api/users` - Restituisce un elenco di utenti.
GET `/api/users/:name` - Restituisce un utente specifico.
GET `/api/posts` - Restituisce un elenco di post.
GET `/api/posts/:title` - Restituisce un post specifico cercato per titolo.
```

Al momento, sono disponibili solo metodi `GET` e le richieste sono accettate da qualunque origine (CORS) sulla porta `8000` (modificabile nel file `server.js`).

Il metodo `GET` consente di recuperare dati senza modificarli, rendendo l'API idonea per operazioni di sola lettura.

Qualsiasi richiesta che non corrisponde a questi endpoint restituirà un errore **404 Not Found**.

---

# Descrizione del codice

## Middleware e configurazione CORS

Il blocco:

```js
app.use(cors({
  origin: '*',
  methods: ['GET'],
}));
```

consente richieste CORS solo di tipo `GET` da qualunque origine, il che è coerente con quanto dichiarato. Eventuali richieste `POST`, `PUT`, ecc., verranno rifiutate con un **403 Forbidden**.

---

## Logging delle richieste

Il middleware per il logging:

```js
app.use((req, res, next) => {
  console.log(`Nuova richiesta: [${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  res.on('finish', () => {
    console.log(`→ Status: ${res.statusCode}`);
  });
  next();
});
```

Tale implementazione consente un tracciamento completo di ogni richiesta, incluso lo **status code finale** della risposta. È particolarmente utile in fase di debug e monitoraggio.

---

## Middleware core

```js
app.use(express.json());
```

Inserito **dopo** il logging e **prima** delle rotte, permette il parsing del body JSON. In un'API solo GET, tale middleware è ininfluente ma può restare in vista di future estensioni con metodi di modifica HTTP.

---

## Routing

Le rotte `/api/users` e `/api/posts` montate e prefissate con `/api` tramite:

```js
app.use('/api', userRoutes);
app.use('/api', postRoutes);
```

---

## Endpoints statici e fallback

```js
app.all('/test', ...)
app.all('/', ...)
```

Questi endpoint sono utili per test.

Handler fallback per il 404 come ultimo middleware per gestire le richieste non corrispondenti:

```js
app.use((req, res) => {
  res.status(404).send("Risorsa non trovata!");
});
```

---

## Ascolto sulla porta 8000

Il server è configurato di default per ascoltare sulla porta `8000`:

```js
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}...`);
}).on('error', err => {
  console.error(`Errore durante l'avvio del server: ${err.message}`);
});
```