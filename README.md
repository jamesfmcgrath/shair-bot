# Shair-Bot

> Proof of Concept Web App using React + Tailwind CSS

**Shair-Bot** is a lightweight proof-of-concept dashboard application built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It is designed to demonstrate an interactive knowledge survey tool for potential investors.

---

## 🛠 Tech Stack

- [Vite](https://vitejs.dev/) – fast modern frontend tooling
- [React 19](https://react.dev/) – component-based UI framework
- [Tailwind CSS 3.4](https://tailwindcss.com/) – utility-first CSS
- [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer) – CSS tooling

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:your-username/shair-bot.git
cd shair-bot
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open your browser at `http://localhost:5173` to view the app.

---

## ⚙️ Tailwind Setup Notes

Tailwind was manually installed and pinned to a stable version:

```bash
npm install -D tailwindcss@3.4.3 postcss autoprefixer
npx tailwindcss init -p
```

Configuration files:

- `tailwind.config.js`
- `postcss.config.js`

In `src/index.css`, Tailwind's directives are included:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📈 Project Status

- ✅ Project scaffolded with Vite + React
- ✅ Tailwind CSS configured (v3.4.3 for CLI support)
- ✅ Private GitHub repo initialized
- ⏳ Layout and components in progress
- 🔜 Interactive data + survey views
- 🔜 Deployed prototype (via Vercel or Netlify)

---

## 📁 License

This project is private and currently not licensed for public use.
