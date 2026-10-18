# Prompt: Website Portofolio Bergaya macOS / Apple

Salin seluruh isi di bawah garis ini dan tempelkan ke AI (Claude, ChatGPT, Cursor, dll).

---

## PERAN

Kamu adalah seorang **Senior Front-End Developer & UI Designer** yang ahli dalam desain ala Apple (macOS Sonoma/Sequoia, Human Interface Guidelines) dan Three.js. Buatkan sebuah **website portofolio statis** yang meniru tampilan dan nuansa **desktop macOS**, siap di-deploy ke **Vercel**.

## TUJUAN

Website portofolio pribadi yang terasa seperti membuka Mac: ada menu bar di atas, wallpaper, dock di bawah, dan jendela-jendela (window) bergaya macOS untuk menampilkan isi tiap halaman. Hasil akhir harus rapi, responsif, ringan, dan terasa "premium" seperti produk Apple.

## TECH STACK (WAJIB)

- HTML5, CSS3 (vanilla), JavaScript (vanilla, tanpa framework)
- **Three.js** (versi lokal `three.min.js`) + `OBJLoader.js` + `OrbitControls.js` untuk elemen 3D interaktif
- Tanpa build tool. Semua file dapat langsung dibuka di browser
- Deploy: **Vercel** (static site)
- Font: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Helvetica Neue", sans-serif`
- Ikon: SVG inline (boleh gaya SF Symbols)

## STRUKTUR FOLDER & FILE (WAJIB DIIKUTI PERSIS)

```
/
├── experience/                  # aset (gambar/logo) untuk halaman pengalaman
├── fh0gwod4bpj4-kni.../         # folder aset tambahan (model 3D .obj / tekstur)
├── project/                     # aset (screenshot/gambar) untuk proyek
├── sertifikat/                  # gambar sertifikat
├── .gitignore
├── AC_Odyssey_Kassa....jpg      # gambar aset (dipakai di portofolio/proyek)
├── background 1.png             # wallpaper utama desktop
├── certificate.html             # halaman Sertifikat
├── experience.html              # halaman Pengalaman
├── gambar pkm.jpg               # foto kegiatan PKM
├── index.html                   # halaman utama (desktop macOS + dock)
├── layout.png                   # gambar referensi layout
├── M e l l o w.jpg              # gambar aset proyek
├── main.js                      # logika utama (dock, window, Three.js, jam)
├── OBJLoader.js                 # loader model 3D
├── OrbitControls.js             # kontrol kamera 3D
├── portfolio.html               # halaman Portofolio / Proyek
├── style.css                    # seluruh styling
├── three.min.js                 # library Three.js
├── untitled@1.5x.png            # gambar aset tambahan
└── vercel.json                  # konfigurasi deploy Vercel
```

Aturan struktur:
- Jangan menambah framework atau mengubah nama file di atas.
- Gunakan path relatif. Untuk nama file yang mengandung spasi (misalnya `background 1.png`, `gambar pkm.jpg`, `M e l l o w.jpg`), gunakan `encodeURI` atau `%20` pada atribut `src`/`url()`.
- Semua halaman (`index.html`, `portfolio.html`, `experience.html`, `certificate.html`) memakai **satu** `style.css` yang sama dan `main.js` yang sama.

## KONSEP DESAIN (macOS / APPLE STYLE)

### 1. Desktop (`index.html`)
- **Wallpaper**: `background 1.png` sebagai background fullscreen (`background-size: cover`), ditambah overlay gradasi halus.
- **Menu Bar** (atas, tinggi ±28px):
  - Kiri: logo Apple (SVG), nama aplikasi aktif (tebal), lalu menu: *File, Edit, View, Window, Help* (dekoratif, ada efek hover).
  - Kanan: ikon Wi-Fi, baterai, search, control center (dekoratif), **jam & tanggal real-time** (format: `Sen 12 Mei  14.32`).
  - Efek **glassmorphism**: `backdrop-filter: blur(20px) saturate(180%)`, background `rgba(255,255,255,0.25)`.
- **Dock** (bawah, tengah):
  - Ikon: Home/Finder, Portofolio, Pengalaman, Sertifikat, GitHub, LinkedIn, Email, Trash (dekoratif).
  - Efek **magnification** saat hover (ikon membesar, ikon tetangga ikut membesar bertahap), tooltip nama di atas ikon, dan animasi **bounce** saat diklik.
  - Titik kecil di bawah ikon untuk menandai aplikasi/halaman aktif.
  - Sudut membulat (±22px), glass blur, border tipis `rgba(255,255,255,0.3)`.
- **Window utama (Hero/About)** di tengah:
  - Title bar dengan tiga tombol "traffic light" (merah `#FF5F57`, kuning `#FEBC2E`, hijau `#28C840`) yang berfungsi: merah = tutup, kuning = minimize (animasi genie sederhana), hijau = maximize/restore.
  - Isi: foto/avatar bulat, nama, judul profesi, deskripsi singkat, tombol "Lihat Portofolio" & "Hubungi Saya" bergaya tombol macOS.
  - Window dapat **di-drag** (mouse & touch) lewat title bar dan bisa fokus (z-index naik saat diklik).
- **Elemen 3D (Three.js)**: tampilkan satu model `.obj` (ambil dari folder `fh0gwod4bpj4-kni...`) atau objek geometri fallback (misalnya torus/ikosahedron dengan material glossy) di dalam window atau sebagai dekorasi desktop. Gunakan `OrbitControls` (zoom dinonaktifkan, rotate aktif, `autoRotate` pelan), pencahayaan ambient + directional, dan `renderer` transparan (`alpha: true`). Handle `resize`.

### 2. Halaman Portofolio (`portfolio.html`)
- Tampil sebagai jendela **Finder** / **App Store style**: sidebar kiri (kategori: Semua, Web, Mobile, UI/UX, Lainnya) dan konten kanan berupa grid kartu proyek.
- Kartu proyek: thumbnail dari folder `project/`, judul, deskripsi singkat, tag teknologi (pill), tombol "Lihat Demo" dan "Source".
- Klik kartu membuka **modal/sheet** ala macOS (muncul dari atas dengan animasi, latar blur) berisi detail proyek.
- Gunakan gambar `AC_Odyssey_Kassa...`, `M e l l o w.jpg`, `gambar pkm.jpg` sebagai contoh data proyek.

### 3. Halaman Pengalaman (`experience.html`)
- Gaya aplikasi **Notes** atau **Calendar**: daftar pengalaman di sisi kiri (seperti daftar catatan), detail di sisi kanan.
- Atau **timeline vertikal** dengan garis tipis dan titik bulat bergaya Apple.
- Tiap item: logo (dari `experience/`), posisi, instansi, periode, 3–4 poin tanggung jawab.
- Sertakan pengalaman organisasi/PKM (pakai `gambar pkm.jpg`).

### 4. Halaman Sertifikat (`certificate.html`)
- Gaya **Photos** / **Preview**: grid gambar sertifikat dari folder `sertifikat/`.
- Klik gambar membuka **lightbox** dengan animasi zoom halus, tombol next/prev, tombol tutup (ESC), serta nama & penerbit sertifikat.
- Tambah filter (Semua, Kursus, Lomba, Organisasi).

### 5. Navigasi Antar Halaman
- Dock tampil di **semua** halaman dan ikon aktif sesuai halaman.
- Transisi halaman halus (fade + scale 0.98 → 1, durasi 300ms).
- Tombol traffic light merah pada halaman selain `index.html` kembali ke `index.html`.

## DESIGN TOKENS

```css
:root {
  --bg-glass: rgba(255, 255, 255, 0.55);
  --bg-glass-dark: rgba(30, 30, 30, 0.55);
  --border-glass: rgba(255, 255, 255, 0.35);
  --text-primary: #1d1d1f;
  --text-secondary: #6e6e73;
  --accent: #0a84ff;          /* biru sistem Apple */
  --danger: #ff453a;
  --success: #30d158;
  --radius-window: 14px;
  --radius-card: 18px;
  --radius-dock: 22px;
  --shadow-window: 0 22px 70px 4px rgba(0,0,0,0.35), 0 0 0 0.5px rgba(0,0,0,0.3);
  --blur: blur(24px) saturate(180%);
  --font: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Helvetica Neue", sans-serif;
}
```

- Dukung **Dark Mode otomatis** via `@media (prefers-color-scheme: dark)` dan tombol toggle di menu bar.
- Animasi memakai `cubic-bezier(0.32, 0.72, 0, 1)` (kurva khas Apple), durasi 250–450ms.
- Hormati `prefers-reduced-motion`.

## FITUR JAVASCRIPT (`main.js`)

Susun kode dalam bagian yang jelas dan diberi komentar:

1. `initClock()` jam & tanggal menu bar, update tiap detik.
2. `initDock()` efek magnification, tooltip, bounce, penanda aktif.
3. `initWindows()` drag, fokus, close/minimize/maximize.
4. `initThree()` scene, kamera, renderer, `OBJLoader`, `OrbitControls`, loop animasi, resize handler, fallback jika model gagal dimuat.
5. `initTheme()` toggle dark/light, simpan di `localStorage`.
6. `initPortfolio()`, `initExperience()`, `initCertificate()` render data dari array JS (mudah diedit), filter, modal/lightbox.
7. `initPageTransition()` animasi saat berpindah halaman.
8. Cek keberadaan elemen sebelum menjalankan fungsi (karena `main.js` dipakai di banyak halaman).

## KONFIGURASI VERCEL (`vercel.json`)

Buatkan konfigurasi untuk static site dengan:
- `cleanUrls: true` (agar `/portfolio` membuka `portfolio.html`)
- header cache panjang untuk gambar dan file `.js`/`.css`
- header keamanan dasar (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

## `.gitignore`

Isi dengan: `node_modules/`, `.vercel/`, `.DS_Store`, `*.log`, `.env`.

## KONTEN (ISI DENGAN PLACEHOLDER YANG MUDAH DIGANTI)

- Nama: `[Nama Lengkap]`
- Profesi: `[Web Developer / UI Designer / Mahasiswa ...]`
- Bio singkat 2–3 kalimat.
- 3–6 proyek, 2–4 pengalaman, 4–8 sertifikat (judul, penerbit, tahun).
- Tautan sosial: GitHub, LinkedIn, Instagram, Email.
- Taruh semua data konten di bagian atas `main.js` dalam satu objek `DATA` agar mudah diedit.

## RESPONSIF

- **Desktop (≥1024px)**: tampilan penuh seperti macOS.
- **Tablet (768–1023px)**: window memenuhi ±90% lebar, sidebar bisa dilipat.
- **Mobile (<768px)**: tampilan seperti **iPadOS/iOS** (window fullscreen tanpa drag, dock lebih kecil dengan ikon tanpa magnification, menu bar disederhanakan).

## AKSESIBILITAS & PERFORMA

- Semantik HTML yang benar (`header`, `nav`, `main`, `section`), atribut `alt` pada semua gambar, `aria-label` pada tombol ikon.
- Dock dan window dapat diakses dengan keyboard (Tab, Enter, Esc).
- Gambar memakai `loading="lazy"` kecuali wallpaper.
- Hindari library tambahan selain yang tercantum.
- Kontras teks memenuhi WCAG AA.

## FORMAT OUTPUT YANG DIMINTA

1. Tampilkan **setiap file secara lengkap**, satu per satu, dengan judul nama file di atas blok kodenya, mengikuti urutan: `index.html` → `portfolio.html` → `experience.html` → `certificate.html` → `style.css` → `main.js` → `vercel.json` → `.gitignore`.
2. **Jangan** menulis ulang isi `three.min.js`, `OBJLoader.js`, dan `OrbitControls.js`; cukup beri tahu cara memuatnya (urutan `<script>`: `three.min.js` → `OBJLoader.js` → `OrbitControls.js` → `main.js`).
3. Jangan menyingkat kode dengan komentar seperti "... sisanya sama". Kode harus lengkap dan langsung berjalan.
4. Di akhir, berikan **panduan singkat**: cara mengganti konten, cara menambah proyek/sertifikat, dan langkah deploy ke Vercel.

## KRITERIA HASIL AKHIR

- [ ] Tampilan benar-benar terasa seperti macOS (menu bar, dock, window, traffic light, blur)
- [ ] Dock magnification dan window drag berjalan mulus
- [ ] Model/objek 3D tampil dan dapat diputar
- [ ] Keempat halaman saling terhubung lewat dock
- [ ] Responsif di desktop, tablet, dan mobile
- [ ] Dark mode berfungsi
- [ ] Siap deploy di Vercel tanpa error
- [ ] Tidak ada error di console browser
