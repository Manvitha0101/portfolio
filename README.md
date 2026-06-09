# Manvitha Budidha — Portfolio

> Personal portfolio website built with React, Tailwind CSS, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/Live-Demo-818cf8?style=for-the-badge)](https://manvitha0101.github.io)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Name, role pills, CTAs (View Projects / Download Resume / Contact Me), stats grid |
| **About** | Professional bio + 4 strength pillars (Backend, Full Stack, AI, DSA) |
| **Education** | Animated timeline — GNITS, Sri Guru Junior College, New Vision High School |
| **Skills** | Grouped skill cards — Languages, Frontend, Backend, Databases, Tools, Core CS |
| **Projects** | MediAssure & Coding Progress Tracker — click to expand architecture + impact |
| **Experience** | Capabl Software Development Internship — responsibilities, achievements, stack |
| **Achievements** | Indathon Hackathon Winner, CipherCop National Finalist, 300+ DSA problems |
| **Certifications** | Google Kaggle Agentic AI · IBM Cybersecurity · Google AI Essentials |
| **Coding Profiles** | GitHub · LeetCode · LinkedIn |
| **Contact** | Copy-to-clipboard email, contact form with mailto fallback |

---

## 🛠 Tech Stack

- **Framework** — [React 19](https://react.dev) + [Vite 8](https://vitejs.dev)
- **Styling** — [Tailwind CSS 3](https://tailwindcss.com) + custom CSS design tokens
- **Animations** — [Framer Motion 12](https://www.framer.com/motion/)
- **Icons** — [Lucide React](https://lucide.dev)
- **Fonts** — Inter + JetBrains Mono (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/manvitha0101/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js      # All portfolio content — edit here
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Design system & tokens
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## ✏️ Customization

All portfolio content lives in **`src/data/content.js`**. Edit that file to update:
- Skills, projects, experience, education
- Achievements and certifications
- Coding profile links and contact info

To add your **resume**, place the PDF at `public/resume.pdf`.

---

## 🎨 Design System

The entire color palette is driven by CSS custom properties in `src/index.css`:

```css
:root {
  --accent:       #4f46e5;   /* indigo */
  --accent-2:     #7c3aed;   /* violet */
  --accent-3:     #0ea5e9;   /* sky */
  --bg:           #f8fafc;
  --surface:      #ffffff;
}

.dark {
  --accent:       #818cf8;
  --bg:           #060913;
  --surface:      #0d1117;
}
```

Dark mode is enabled by default and toggled via the sun/moon button in the navbar.

---

## 📬 Contact

**Manvitha Budidha**
- Email: [manvithabudidha@gmail.com](mailto:manvithabudidha@gmail.com)
- GitHub: [@manvitha0101](https://github.com/manvitha0101)
- LinkedIn: [manvithabudidha](https://linkedin.com/in/manvithabudidha)
- LeetCode: [manvithaa_01](https://leetcode.com/u/manvithaa_01/)

---

<p align="center">Designed & built by Manvitha Budidha · 2026</p>
