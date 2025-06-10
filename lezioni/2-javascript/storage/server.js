// file: server.js
const express = require('express');
const cors = require('cors');
const connection = require('./mysql');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/salva', (req, res) => {
  const { nome, cognome, email, anni } = req.body;

  if (!nome || !cognome || !email || !anni) {
    return res.status(400).json({ message: 'Dati mancanti' });
  }

  const sql = 'INSERT INTO utenti (nome, cognome, email, anni) VALUES (?, ?, ?, ?)';
  connection.query(sql, [nome, cognome, email, anni], (err, result) => {
    if (err) {
      console.error('Errore nell’inserimento:', err);
      return res.status(500).json({ message: 'Errore server' });
    }
    res.json({ message: 'Dati salvati nel database' });
  });
});

app.listen(PORT, () => {
  const createDatabase = `
      CREATE DATABASE IF NOT EXISTS utenti;
      USE utenti;
      CREATE TABLE IF NOT EXISTS utenti (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        cognome VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        anni INT NOT NULL
      );`;
  connection.query(createDatabase, (err, result) => {
    if (err) {
      console.error('Errore nella creazione del database:', err);
    } else {
      console.log('Database creato con successo');
    }
  });
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
