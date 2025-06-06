const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: '*', // consente tutte le origini
  methods: ['GET'], // consente solo GET
}));
const PORT = 8000;

// Test
app.all('/test', (req, res) => {
  res.status(200).send("Il server è attivo e funzionante!");
});

// Logging delle richieste
app.use((req, res, next) => {
  console.log(`Nuova richiesta: [${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  res.on('finish', () => {
    console.log(`→ Status: ${res.statusCode}`);
  });
  next();
});

// Middleware
app.use(express.json());

// Import rotte
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Rotte principali
app.use('/api', userRoutes);
app.use('/api', postRoutes);

app.all('/', (req, res) => {
  res.status(200).send("Benvenuto nell'API di esempio dal server!");
});

// Fallback per risorse non trovate
app.use((req, res) => {
  res.status(404).send("Risorsa non trovata!");
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}...`);
}).on('error', err => {
  console.error(`Errore durante l'avvio del server: ${err.message}`);
})