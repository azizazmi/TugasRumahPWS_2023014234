# Tugas Rumah Mata Kuliah Pengembangan Web Service
> author: Azizah Aurellia Azmi - 20230140234

## Daftar Isi
- [Deskripsi Project](#deskripsi-program)
- [Struktur Project](#project-structure)
- [Cara Menjalankan Project](#how-to-run)
- [Dokumentasi Project](#project-documentation)

## Deskripsi Program
Aplikasi web sederhana yang terdiri dari basis data MySQL, API dengan Node.js (Express.js), dan antarmuka HTML + JavaScript.
Project ini dibuat untuk memenuhi tugas rumah mata kuliah PWS Semester Antara 2025.

## Project Structure
```
├── public/
│   ├── form.html
│   ├── list.html
├── routes/                            # Routing API untuk CRUD
│   ├── data.js
├── uploads/                           # Untuk menyimpan gambar yang diunggah
├── server.js                          # Entry point server Express
├── db.js                              # Konfigurasi dan inisialisasi koneksi ke MySQL
└── README.md                          # Dokumentasi utama proyek
```

## How to Run
1. Clone Repository (Jalankan di dalam WSL)
   ```
   git clone https://github.com/azizazmi/TugasRumahPWS_2023014234.git
   cd TugasRumahPWS-20230140234
   ```
2. Set Up MySQL Workbench
   - Buat database di MySQL Workbench dengan nama `db-rjx-basket`
   - Import file `.sql` dari repository ini
3. Set Up db.js
   - Buka file `db.js` di root project.
   - Sesuaikan isi konstanta dengan konfigurasi MySQL Workbench kamu
5. Install dependencies
   ```
   npm install
   ```
6. Run Project
   ```
   node server.js
   ```

## Project Documentation
| Page | Screenshot |
|---|---|
| **Input Page** |xxx|
| **Input Data** |xxx|
| **Daftar Data** |xxx|
| **Daftar Data di Database** |xxx|
