const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use('/posts', (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== 'token 123') {
    return res.status(401).json({ error: 'Token mancante o non valido' });
  }
  next();
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, title: 'Post protetto 1' },
    { id: 2, title: 'Post protetto 2' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}...`);
});