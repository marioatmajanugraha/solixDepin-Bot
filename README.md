
# SolixDePIN-Bot 🌐

Script ini digunakan untuk mengotomatiskan tugas dan pengambilan Connection Quality di platform Solix DePIN.

![photo_2025-04-14_13-08-44](https://github.com/user-attachments/assets/a2180455-49dc-4960-a2cc-42d72cae82e0)

---
## 📌 New Update 
- auto Relogin
- Get Total Points


## 📌 Fitur

- ✅ Auto completion untuk semua tugas (Follow, Social, dll.) menggunakan token dari `tokens.txt`
- 🔄 Auto get Connection Quality dengan looping hingga dihentikan (Ctrl+C) menggunakan random user agent
- 🔌 Dukungan proxy (`proxy.txt`) untuk koneksi aman
- 🎮 Pilihan mode: "Clear All Task" atau "Get Connection Quality" melalui prompt interaktif
- 📊 Menampilkan status task (total, sudah diklaim, tersedia) sebelum memproses
- ⚡ Random user agent untuk menghindari deteksi saat mengambil Connection Quality
- 🎉 Log yang menarik dengan warna dan emoji untuk pengalaman pengguna yang lebih baik

---

## 🚀 Cara Penggunaan

### 1. Clone repository ini
```sh
git clone https://github.com/marioatmajanugraha/solixDePIN-Bot.git
cd solixDePIN-Bot
```

### 2. Install Dependencies
```sh
npm install axios chalk@4 cfonts http-proxy-agent socks-proxy-agent readline-sync
```

### 3. Siapkan file `tokens.txt`

Buat file `tokens.txt` dan isi dengan token akses (format JWT), satu token per baris. Contoh:

```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. (Opsional) Buat `proxy.txt`

Jika ingin menggunakan proxy, buat file `proxy.txt` dengan format:

```txt
http://username:password@host:port
socks5://username:password@host:port
```

### 5. Jalankan Script
```sh
node index.obf.js
```

### 6. Ikuti Instruksi

- Pilih aksi:
  - `1` untuk "Clear All Task" 📋
  - `2` untuk "Get Connection Quality" 🔄
- Pilih apakah ingin menggunakan proxy (y/n)

Script akan berjalan otomatis sesuai pilihan Anda.

---

## ⚠️ Disclaimer

Gunakan script ini dengan bijak dan sesuai aturan platform Solix DePIN.  
**Developer tidak bertanggung jawab atas penyalahgunaan atau banned akun.**

---

## 🤝 Kontribusi

Ingin berkontribusi? Silakan fork repo ini dan ajukan pull request. Kami terbuka untuk ide baru dan perbaikan!

---

## 📞 Kontak

- Telegram: [@balveerxyz](https://t.me/balveerxyz)
- Join Channel: [t.me/airdroplocked](https://t.me/airdroplocked)
