# PhotoBooth - Aplikasi Photo Booth Modern

[![Vite](https://img.shields.io/badge/vite-%23000000.svg?style=for-the-badge&logo=vite&logoColor=%23646CFF)](https://vite.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)

## 📸 Deskripsi

PhotoBooth adalah aplikasi web modern berbasis React + Vite untuk mengambil foto menggunakan kamera perangkat dengan berbagai filter kreatif. Fitur utama meliputi:

- **Kamera Live** dengan akses webcam
- **Filter Efek** (sepia, grayscale, dll.)
- **Gallery** untuk menyimpan hasil foto
- **Download** foto dalam format PNG
- **UI Responsif** dengan toast notifications

## 🚀 Fitur Utama

- ✅ Akses kamera real-time (getUserMedia API)
- ✅ 6+ filter efek visual
- ✅ Gallery dengan max 10 foto terbaru
- ✅ Flash effect saat capture
- ✅ Download foto timestamped
- ✅ UI modern dengan CSS modules
- ✅ Hot Module Replacement (HMR) optimal
- ✅ Mobile-friendly responsive design

## 📁 Struktur Project

```
photobooth/
├── src/
│   ├── components/
│   │   ├── Camera/          # Komponen kamera & controls
│   │   ├── Filters/         # Filter buttons & list
│   │   ├── Gallery/         # Gallery panel & items
│   │   └── UI/              # Toast notification
│   ├── hooks/               # Custom React hooks
│   │   ├── useCamera.js
│   │   ├── useFilters.js
│   │   ├── useCapture.js
│   │   └── useToast.js
│   ├── pages/
│   │   └── Photobooth.jsx   # Halaman utama aplikasi
│   ├── utils/               # Fungsi helper
│   │   ├── canvas.js
│   │   └── download.js
│   ├── App.jsx              # Root component
│   └── main.jsx
├── public/                  # Assets statis
├── package.json
├── vite.config.js
├── TODO.md                  # Progress integration
└── README.md
```

## 🛠️ Teknologi Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React | 19.2.4 | UI Framework |
| Vite | 8.0.4 | Build Tool & Dev Server |
| CSS Modules | - | Scoped Styling |
| ESLint | 9.39.4 | Code Quality |

## 📦 Instalasi & Setup

1. **Clone atau download project**
```bash
git clone <repo-url>
cd photobooth
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan development server**
```bash
npm run dev
```
Buka `http://localhost:5173`

## 🔧 Scripts NPM

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Start dev server dengan HMR |
| `npm run build` | Build production |
| `npm run lint` | Check ESLint |
| `npm run preview` | Preview production build |

## 🎮 Cara Penggunaan

1. **Klik "Enable Camera"** → Izinkan akses kamera
2. **Pilih Filter** dari list bawah kamera
3. **Klik Capture** untuk ambil foto (flash effect)
4. **Lihat Gallery** di panel kanan
5. **Download** atau **Delete** foto individual
6. **Clear All** untuk reset gallery

## 📱 Browser Support

- Chrome 70+
- Firefox 52+
- Safari 11+
- Edge 79+

**HTTPS required** untuk akses kamera di production.

## ⚠️ Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Kamera tidak muncul | Izinkan permission, gunakan HTTPS |
| Filter tidak work | Check console errors |
| HMR error | Pastikan files export hanya components |
| Build failed | `npm run lint -- --fix` |

## 🔮 Roadmap

- [ ] Print to PDF
- [ ] Share via WhatsApp/Social
- [ ] Timer countdown
- [ ] Multi-pose collage
- [ ] PWA support
- [ ] QR Code generator

## 📄 Lisensi

MIT License - lihat [LICENSE](LICENSE) untuk detail.

## 🙌 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing`)
5. Buka Pull Request

Terima kasih kontributor!

---

* Dibuat dengan ❤️ menggunakan React + Vite*

