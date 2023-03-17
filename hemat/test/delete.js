const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3009;

// create a new database object and connect to it
const db = new sqlite3.Database('sell.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydatabase database.');
});

// create a new endpoint to delete a user by id
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM sell WHERE id = ?`;
  db.run(sql, [id], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`User with id ${id} has been deleted.`);
    res.send(`User with id ${id} has been deleted.`);
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
////
