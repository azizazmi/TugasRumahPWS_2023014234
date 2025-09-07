const mysql = require("mysql2");
// require("dotenv").config();

// Buat pool koneksi database
// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT || 3380,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   namedPlaceholders: true,
// });

const db = mysql.createConnection({
    host: 'localhost',  // gunakan localhost
    user: 'root',
    password: '@@AkasayangSuguru75',
    database: 'db_rjx_basket',
    port : '3306'
});

db.connect((err) => {
  if (err) {
    console.error("❌ Koneksi Gagal:", err.message);
  } else {
    console.log("✅ Koneksi ke MySQL Berhasil!");
  }
});

module.exports = db;
