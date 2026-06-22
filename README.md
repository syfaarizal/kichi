# Kichi Landing Page

React + TypeScript + Tailwind CSS migration dari `index.html`.

## Struktur Project

```
kichi-landing/
├── public/
│   └── img/
│       └── logo/
│           └── avatar.png       ← Taruh avatar/logo Kichi di sini
├── src/
│   ├── components/
│   │   ├── About.tsx            ← Section about Kichi & traits
│   │   ├── Commands.tsx         ← Slash commands dengan filter tab
│   │   ├── CTA.tsx              ← Call-to-action section
│   │   ├── DiscordIcon.tsx      ← Shared Discord SVG icon
│   │   ├── Features.tsx         ← 6 feature cards
│   │   ├── Footer.tsx           ← Footer dengan 3 kolom
│   │   ├── Hero.tsx             ← Hero section dengan ilustrasi
│   │   ├── HowItWorks.tsx       ← 4 langkah cara pakai
│   │   ├── Navbar.tsx           ← Fixed navbar + mobile menu
│   │   ├── ParticlesBg.tsx      ← Canvas particle animation
│   │   └── TechStack.tsx        ← Tech stack cards
│   ├── hooks/
│   │   └── useScrollReveal.ts   ← Intersection Observer hook
│   ├── App.tsx                  ← Root component
│   ├── index.css                ← Global styles + Tailwind
│   └── main.tsx                 ← Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Setup & Jalankan

```bash
# Install dependencies
npm install

# Dev server
npm run dev

# Build production
npm run build
```

## Avatar / Logo

Taruh file gambar avatar Kichi di:
```
public/img/logo/avatar.png
```

Komponen Hero akan otomatis load dari path tersebut. Jika file tidak ditemukan, fallback ke ilustrasi SVG bawaan (sama seperti di index.html original).

Format yang didukung: `.png`, `.jpg`, `.webp`, `.svg`

## Fitur

- ✅ Particle background canvas animation
- ✅ Scroll reveal (Intersection Observer)
- ✅ Navbar fixed + mobile responsive + hamburger menu
- ✅ Hero dengan floating avatar, wave bars, stats
- ✅ Features grid (6 cards) dengan hover effects
- ✅ Commands dengan filter tab (All / General / Admin / Voice)
- ✅ How It Works (4 step cards dengan connecting line)
- ✅ Tech Stack 2-column layout
- ✅ About section dengan traits
- ✅ CTA section
- ✅ Footer 3-column responsive
- ✅ Gold shimmer text animation
- ✅ Glass morphism cards
- ✅ Scrollbar custom styling
- ✅ Custom selection color
