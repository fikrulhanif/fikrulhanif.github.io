# Portfolio Website - Fikrul Hanif Alghazali

Portfolio pribadi modern yang dibangun dengan Astro, Tailwind CSS, dan berbagai library untuk menciptakan pengalaman web yang menarik dan interaktif.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Scroll animations
- **Background Effects**: [Vanta.js](https://www.vantajs.com/) - Animated 3D backgrounds
- **3D Library**: [Three.js](https://threejs.org/) - Required for Vanta.js
- **Fonts**: Google Fonts (Inter & Space Grotesk)

## 📁 Struktur Project

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions untuk auto-deploy
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Navigation bar
│   │   ├── Hero.astro          # Hero section dengan Vanta.js
│   │   ├── About.astro         # About me section
│   │   ├── Skills.astro        # Skills & tools
│   │   ├── Projects.astro      # Portfolio projects
│   │   ├── Certifications.astro # Certifications
│   │   ├── Contact.astro       # Contact information
│   │   └── Footer.astro        # Footer
│   ├── layouts/
│   │   └── Layout.astro        # Main layout template
│   ├── pages/
│   │   └── index.astro         # Homepage
│   └── styles/
│       └── global.css          # Global styles & Tailwind
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Instalasi & Setup

### Prerequisites

- Node.js >= 22.12.0
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd d-project-web-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

   Website akan berjalan di `http://localhost:4321`

## 📦 Build & Deploy

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

### Preview Build

```bash
npm run preview
```

### Deploy ke GitHub Pages

#### Setup GitHub Pages

1. **Buat repository di GitHub** dengan nama `username.github.io` (ganti `username` dengan username GitHub Anda)

2. **Update `astro.config.mjs`**

   ```javascript
   export default defineConfig({
     site: "https://username.github.io", // Ganti dengan username Anda
     base: "/",
   });
   ```

3. **Push code ke GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

4. **Setup GitHub Actions**

   File `.github/workflows/deploy.yml` sudah tersedia. GitHub Actions akan otomatis:
   - Build project setiap kali ada push ke branch `main`
   - Deploy hasil build ke GitHub Pages

5. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Settings → Pages
   - Source: pilih "GitHub Actions"
   - Website akan tersedia di `https://username.github.io`

## 🎨 Kustomisasi

### Mengubah Informasi Personal

Edit file-file berikut untuk mengubah informasi:

1. **Hero Section** (`src/components/Hero.astro`)
   - Nama
   - Tagline
   - Deskripsi

2. **About Section** (`src/components/About.astro`)
   - Bio
   - Statistik

3. **Skills Section** (`src/components/Skills.astro`)
   - Tambah/edit skills di array `skillCategories`

4. **Projects Section** (`src/components/Projects.astro`)
   - Tambah/edit projects di array `projects`

5. **Certifications Section** (`src/components/Certifications.astro`)
   - Tambah/edit certifications di array `certifications`

6. **Contact Section** (`src/components/Contact.astro`)
   - Update contact information di array `contactInfo`

### Mengubah Warna Theme

Edit `src/styles/global.css` untuk mengubah color scheme:

```css
/* Contoh: Ganti cyan dengan warna lain */
.text-cyan-400 {
  color: #your-color;
}
.bg-cyan-400 {
  background-color: #your-color;
}
```

### Mengubah Vanta.js Effect

Di `src/layouts/Layout.astro`, ganti `VANTA.WAVES` dengan effect lain:

```javascript
// Waves (default)
VANTA.WAVES({ ... })

// Atau ganti dengan:
VANTA.NET({ ... })
VANTA.BIRDS({ ... })
VANTA.FOG({ ... })
```

## 📱 Fitur

- ✅ Fully responsive (mobile-first design)
- ✅ Dark mode default
- ✅ Smooth scrolling
- ✅ Scroll animations (AOS)
- ✅ Interactive 3D background (Vanta.js)
- ✅ Active navigation highlighting
- ✅ Mobile menu
- ✅ SEO friendly
- ✅ Fast loading (static site)
- ✅ Modern UI/UX
- ✅ Accessible

## 🔧 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Fikrul Hanif Alghazali**

- GitHub: [@LilCode2704](https://github.com/LilCode2704)
- LinkedIn: [Fikrul Hanif](https://www.linkedin.com/in/fikrul-hanif-a1904333a/)
- Instagram: [@fikrulhanif\_](https://www.instagram.com/fikrulhanif_)
- Email: fikrulhanif2704@gmail.com

## 🙏 Credits

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [AOS](https://michalsnik.github.io/aos/)
- [Vanta.js](https://www.vantajs.com/)
- [Three.js](https://threejs.org/)
- [Google Fonts](https://fonts.google.com)

---

⭐ Jika project ini membantu, jangan lupa berikan star!
