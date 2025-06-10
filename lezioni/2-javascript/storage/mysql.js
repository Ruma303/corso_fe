const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'corso_fe_mysql'
});

connection.connect((err) => {
  if (err) {
    console.error('Errore nella connessione al database: ' + err.stack);
    return;
  }
  console.log('Connessione al database stabilita');
});

module.exports = connection;
