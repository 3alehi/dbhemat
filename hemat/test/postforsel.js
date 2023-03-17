const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// ایجاد یک دیتابیس SQLite جدید
const db = new sqlite3.Database('sell.db');

// ایجاد جدول کاربران
db.run(`CREATE TABLE IF NOT EXISTS sell (
  id INTEGER NOT NULL,
  id_automatic INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  lastname TEXT NOT NULL,
  fothername TEXT NOT NULL ,
  codemeli TEXT NOT NULL,
  phone TEXT NOT NULL,
  tedadsaham TEXT NOT NULL,
  idsaham TEXT NOT NULL UNIQUE,
  price TEXT NOT NULL,
  tozihat TEXT NOT NULL,
  status TEXT NOT NULL
)`);

// ایجاد یک سرور Express
const app = express();
app.use(cors());
app.use(express.json());

// ایجاد یک API برای ثبت نام کاربران
app.post('/register', (req, res) => {
  const {id, name,lastname, fothername, codemeli , phone,tedadsaham,idsaham, price,tozihat,status} = req.body;

  // افزودن کاربر جدید به دیتابیس
  db.run(`INSERT INTO sell (id,name,lastname, fothername, codemeli , phone,tedadsaham,idsaham, price,tozihat,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
    [id ,name,lastname, fothername, codemeli , phone,tedadsaham,idsaham, price,tozihat,status],
    (err) => {
      if (err) {
        return res.status(500).json({ message: 'خطای سرور' });
      }

      return res.status(200).json({ message: 'کاربر با موفقیت ثبت شد' });
    });
});

// شروع شنیدن درخواست‌ها در پورت 3000
app.listen(3007, () => {
  console.log('سرور شروع به کار کرد.');
});
