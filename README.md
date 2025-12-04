# Vincent Vullag - Portfolio
*(extends from [CodeWithSadee](https://github.com/codewithsadee))*

A modern, responsive personal portfolio website built with **Vue 3 + Vite**. Showcasing projects, experience, and professional skills.

**[Live Demo](https://vullagvs26.github.io/vincent-portfolio/)** • **[Based on CodeWithSadee](https://github.com/codewithsadee)**

---

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Dark theme with modern aesthetics
- Multiple views: About, Resume, Portfolio
- Interactive project showcase with modals
- PDF resume export
- Smooth animations and transitions
- SEO-friendly markup

---

## 🛠️ Tech Stack

- **Vue 3** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Vue Router** - Routing
- **PrimeVue** - UI components

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/vullagvs26/vincent-portfolio.git
cd vincent-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── views/              # Page views (About, Resume, Portfolio)
├── assets/             # Images and static files
├── App.vue             # Root component
├── main.js             # Entry point
└── style.css           # Global styles
```

---

## 📝 Customization

Edit these files to personalize your portfolio:

- **[`src/components/Sidebar.vue`](src/components/Sidebar.vue)** - Profile info & social links
- **[`src/views/About.vue`](src/views/About.vue)** - About section & tools
- **[`src/views/Resume.vue`](src/views/Resume.vue)** - Experience & education
- **[`src/views/Portfolio.vue`](src/views/Portfolio.vue)** - Projects showcase

### Update Colors

Modify the gradient colors in components:
```css
from-[#ffda6f] to-[#ffbc5c]  /* Primary gradient */
bg-[#121212]                  /* Background color */
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🌐 Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

Make sure `base` in [`vite.config.js`](vite.config.js) matches your repository name.

---

## 📄 License

Based on [CodeWithSadee's vCard Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). Feel free to use for your personal portfolio.

---
