# Tugas Rumah Mata Kuliah Pengembangan Web Service
> author: Azizah Aurellia Azmi - 20230140234

## Daftar Isi
- [Deskripsi Project](#deskripsi-project)
- [Struktur Project](#struktur-project)
- [Cara Menjalankan Project](#how-to-run)
- [Dokumentasi Project](#dokumentasi-project)

## Deskripsi Project
Aplikasi web sederhana yang terdiri dari basis data MySQL, API dengan Node.js (Express.js), dan antarmuka HTML + JavaScript.
Project ini dibuat untuk memenuhi tugas rumah mata kuliah PWS Semester Antara 2025.

## Struktur Project
```
├── public/                            # Untuk styling form 
│   ├── form.html
│   ├── list.html
├── uploads/                           # Untuk menyimpan gambar yang diunggah
├── server.js                          # Entry point server Express
├── db.js                              # Konfigurasi dan inisialisasi koneksi ke MySQL
├── db_rjx_basket.js                   # Database
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
   - Import file `db_rjx_basket.sql` dari repository ini
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
7. Add data
   - Buka http://localhost:3000/form.html di web browser
   - Isi form sesuai dengan data yang ingin diisikan
   - Klik button "Lihat Data Pemain" untuk melihat daftar pemain

## Dokumentasi Project
| Page | Screenshot |
|---|---|
| **Input Page** |<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2a3a5d64-6476-465c-ae75-801801a59c49" />|
| **Input Data** |<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9fed01ec-7e87-443f-b667-41f47317969d" />|
| **Daftar Data** |<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/01ee405f-3701-45da-b443-5f59c1008fb0" />|
| **Daftar Data di Database** |<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f9c7cc15-0c70-431b-83ee-c5ca543fb63e" />|
| **GET /api/records** |<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/86ca56fd-f2ea-473c-814f-d2da99efdc69" />|
