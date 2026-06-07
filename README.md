# Kaldor — Official Website

> **Engineering the Next Generation of Web.**

The official marketing website for **Kaldor Pvt Ltd** — a boutique software engineering studio specializing in high-performance digital products, AI-powered workflows, and scalable web solutions.

---

## 🌐 Live Site

[www.kaldor.dev](https://www.kaldor.dev)

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | Framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Typography |

---

## 📁 Project Structure

```
kaldor/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles & CSS variables
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed navbar with mobile menu
│   │   │   └── Footer.tsx      # Footer with links
│   │   │
│   │   ├── sections/           # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── About.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── ui/
│   │       └── AnimatedSection.tsx  # Scroll-triggered fade-up wrapper
│   │
└── tailwind.config.ts          # Design tokens & theme config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.x` or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kaldor-pvtltd/kaldor-website.git

# Navigate into the project
cd kaldor-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📄 Pages & Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen headline with animated entrance |
| **Trust Bar** | Key stats — delivery time, PageSpeed, projects |
| **Services** | 6 service cards — SaaS, E-Commerce, Cloud, Mobile, Web Apps, UI/UX |
| **Why Us** | Comparison vs typical agencies + animated progress bars |
| **Portfolio** | Selected project case studies |
| **Process** | 6-step zigzag timeline |
| **Pricing** | 3 transparent pricing plans in LKR |
| **About** | Who we are + stats grid |
| **FAQ** | Numbered accordion |
| **CTA** | Call-to-action banner |
| **Contact** | WhatsApp CTA + contact detail cards |

---

## 🎨 Design System

- **Primary accent:** `#E5352B` (Red)
- **Background:** `#0A0A0A` (Near black)
- **Display font:** Syne (headings)
- **Body font:** DM Sans (paragraphs)
- **Border:** `rgba(255,255,255,0.07)`

---

## 📦 Deployment

This project is deployed on **Vercel**.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo directly via the [Vercel Dashboard](https://vercel.com/new).

---

## 📞 Contact

**Kaldor Pvt Ltd**
- 🌐 Website: [www.kaldor.dev](https://www.kaldor.dev)
- 📧 Email: hello@kaldor.dev
- 💬 WhatsApp: [Chat with us](https://wa.me/94XXXXXXXXX)
- 📍 Location: Sri Lanka — Remote-first, Global Team

---

## 📝 License

Copyright © 2025 **Kaldor Pvt Ltd**. All rights reserved.

This codebase is proprietary and confidential. Unauthorized copying, distribution, or use of this code, via any medium, is strictly prohibited without prior written permission from Kaldor Pvt Ltd.
