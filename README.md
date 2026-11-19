# Portfolio — Project Manager × Developer

Portofolio React + JSX dengan foto Minecraft, filter galeri 4 proyek, studi kasus **khusus Rata.in**, tab kontribusi, terminal mini, dan mode gelap/terang.

## Jalankan

Node.js 20+ disarankan.

```bash
npm install
npm run dev
```

Buka alamat yang dicetak Vite (biasanya http://localhost:5173). Untuk build produksi:

```bash
npm run build
npm run preview
```

> Jangan membuka `index.html` langsung menggunakan `file://`; aplikasi ini membutuhkan Vite untuk development atau hasil build untuk deployment.

## Edit proyek

Semua data proyek berada di `src/data/projects.js`. Kamu dapat menambah objek pada array `projects` untuk menampilkan proyek baru. Filter yang tersedia sekarang: Semua, Development, Design, Data. Setiap proyek dapat diberi beberapa kategori. **Hanya Rata.in** memiliki `featured: true`, tombol dan studi kasus lengkap.

Komponen antarmuka dan interaksi ditulis dalam `src/App.jsx`. Styling di `src/style.css`. Foto asli di `public/profile.jpeg`.

## Sumber data & catatan

Deskripsi produk ditulis dari README repository berikut, dan role adalah informasi langsung dari pemilik portofolio:

- https://github.com/NBFiidly/rata-in-web — Project Manager + Backend
- https://github.com/Ariffansyah/UnivTalk — Frontend + Bug Hunter
- https://github.com/0xfrq/miniproject — Designer + Frontend
- https://github.com/vihaikel/Oishigiri — Dummy Data

Teknologi pada kartu menunjukkan teknologi **proyek**, tidak otomatis berarti seluruh bagian dikerjakan sendiri. Rata.in masih dalam pengembangan; tidak ditampilkan klaim metrik dampak.

## Jika halaman kosong

1. Pastikan menjalankan perintah dari folder yang berisi `package.json`.
2. Jalankan `npm install`, kemudian `npm run dev`.
3. Tekan Ctrl+Shift+R; jika masih kosong, periksa F12 → Console dan terminal Vite.
4. Untuk memastikan kode terkompilasi gunakan `npm run build`.

> Dependensi belum dapat diinstal di lingkungan pembuat ZIP karena koneksi npm timeout. Build lokal masih perlu diverifikasi.


## Tema
Portofolio menggunakan **dark mode permanen**. Tombol penggantian tema sudah dihapus.
