const fs = require('fs');
const path = require('path');

// Lettura file JSON degli utenti
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const getUsers = (req, res) => {
  res.json(users);
};

const findUsers = (req, res) => {
  const { name } = req.params;
  const filtered = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
  res.json(filtered);
};

module.exports = {
  getUsers,
  findUsers
};
