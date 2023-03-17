const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// ایجاد یک دیتابیس SQLite جدید
const db = new sqlite3.Database('users.db');

// ایجاد جدول کاربران
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`);

// ایجاد یک سرور Express
const app = express();
app.use(cors());
app.use(express.json());

// ایجاد یک API برای ثبت نام کاربران
app.post('/register', (req, res) => {
  const { name, codemeli, phonNumber , address,nameFader } = req.body;

  // افزودن کاربر جدید به دیتابیس
  db.run(`INSERT INTO users (name, codemeli, phonNumber,address,nameFader) VALUES (?, ?, ?,?,?)`,
    [name, codemeli, phonNumber,address,nameFader],
    (err) => {
      if (err) {
        return res.status(500).json({ message: 'خطای سرور' });
      }

      return res.status(200).json({ message: 'کاربر با موفقیت ثبت شد' });
    });
});

// شروع شنیدن درخواست‌ها در پورت 3000
app.listen(3000, () => {
  console.log('سرور شروع به کار کرد.');
});
