const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const db = require("./db");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Konfigurasi multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

function fileFilter(req, file, cb) {
  const allowedTypes = /jpeg|jpg|png/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("❌ Hanya file gambar (jpg, jpeg, png) yang diperbolehkan!"), false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Tes server
// app.get("/", (req, res) => {
//   res.send("✅ Server RJX Basket aktif!");
// });

// Endpoint POST → Simpan data pemain ke DB
app.post("/api/records", upload.single("gambar"), (req, res) => {
  const { nama, tinggi, tanggal } = req.body;
  const gambarPath = req.file ? `/uploads/${req.file.filename}` : null;

  if (!nama || !tinggi || !tanggal || !gambarPath) {
    return res.status(400).json({ message: "❌ Semua field harus diisi!" });
  }

  const sql = "INSERT INTO Pemain (Nama, Tinggi, Tanggal, Gambar) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama, tinggi, tanggal, gambarPath], (err, result) => {
    if (err) {
      console.error("❌ Gagal insert data:", err.message);
      return res.status(500).json({ message: "❌ Gagal simpan data" });
    }
    res.json({
      message: "✅ Data pemain berhasil disimpan!",
      data: {
        id: result.insertId,
        nama,
        tinggi,
        tanggal,
        gambar: gambarPath,
      },
    });
  });
});

// Endpoint GET → Ambil semua data pemain
app.get("/api/records", (req, res) => {
  const sql = "SELECT * FROM Pemain";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Gagal ambil data:", err.message);
      return res.status(500).json({ message: "❌ Gagal ambil data" });
    }
    res.json(results);
  });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
