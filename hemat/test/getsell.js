const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

const db = new sqlite3.Database('./sell.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.use(cors());

app.get('/data', (req, res) => {
  db.all('SELECT * FROM sell', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
