# Portfolio Website - Fikrul Hanif Alghazali

Portfolio pribadi modern yang dibangun dengan Astro, Tailwind CSS, dan berbagai library untuk menciptakan pengalaman web yang menarik dan interaktif.

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Scroll animations
- **Background Effects**: [Vanta.js](https://www.vantajs.com/) - Animated 3D backgrounds
- **3D Library**: [Three.js](https://threejs.org/) - Required for Vanta.js
- **Fonts**: Google Fonts (Inter & Space Grotesk)

## Struktur Project

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

## Instalasi & Setup

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

## Build & Deploy

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

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

- GitHub: [@fikrulhanif](https://github.com/fikrulhanif)
- LinkedIn: [Fikrul Hanif](https://www.linkedin.com/in/fikrul-hanif-a1904333a/)
- Instagram: [@fikrulhanif\_](https://www.instagram.com/fikrulhanif_)
- Email: fikrulhanif2704@gmail.com

## Credits

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [AOS](https://michalsnik.github.io/aos/)
- [Vanta.js](https://www.vantajs.com/)
- [Three.js](https://threejs.org/)
- [Google Fonts](https://fonts.google.com)

---
