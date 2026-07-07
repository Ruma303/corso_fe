const fs = require('fs');
const path = require('path');

const postsFilePath = path.join(__dirname, '../database/posts.json');

const getPosts = (req, res) => {
  console.log("Richiesta per ottenere i post ricevuta");
  try {
    const rawData = fs.readFileSync(postsFilePath);
    const posts = JSON.parse(rawData);
    res.json(posts);
  } catch (err) {
    console.error('Errore nel caricamento dei post:', err);
    res.status(500).json({ message: 'Errore nel caricamento dei post' });
  }
};

const findPosts = (req, res) => {
  console.log("Richiesta per cercare i post ricevuta");
  try {
    const rawData = fs.readFileSync(postsFilePath);
    const posts = JSON.parse(rawData);
    const { title } = req.params;
    const filtered = posts.filter(p =>
      p.title.toLowerCase().includes(title.toLowerCase())
    );
    res.json(filtered);
  } catch (err) {
    console.error('Errore nella ricerca:', err);
    res.status(500).json({ message: 'Errore nella ricerca' });
  }
};

module.exports = {
  getPosts,
  findPosts,
};
