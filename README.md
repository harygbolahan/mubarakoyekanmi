# Mubarak Oyekanmi - Portfolio

A modern, animated portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, custom cursor interactions, and a fully responsive design.

## ✨ Features

- **Smooth Animations** - Powered by Framer Motion for fluid page transitions and scroll effects
- **Custom Cursor** - Interactive cursor that responds to hover states
- **Responsive Design** - Optimized for all screen sizes using Tailwind CSS
- **Dark Theme** - Modern dark color scheme with neon green accents
- **Sections Include:**
  - Hero with rotating role titles
  - About section
  - Featured projects showcase
  - Skills organized by category (Frontend, Backend, Database, DevOps)
  - Professional experience timeline
  - Client testimonials carousel
  - Contact form
  - Back-to-top button

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Linting:** ESLint 9

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd mubarakoyekanmi

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── portfolio/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── animations.ts    # Framer Motion animation variants
│   ├── constants.ts     # Portfolio data and design tokens
│   ├── iconMap.ts       # Icon mappings
│   ├── styles.ts        # Global CSS styles
│   └── types.ts         # TypeScript type definitions
├── App.tsx              # Original app component
├── Portfolio.tsx        # Main portfolio component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/portfolio/constants.ts` to customize:

- **ROLES** - Rotating job titles in hero section
- **PROJECTS** - Your project portfolio
- **SKILLS** - Technical skills by category
- **EXPERIENCE** - Work history
- **TESTIMONIALS** - Client/colleague reviews
- **T (Design Tokens)** - Colors, fonts, and theme values

### Modify Sections

Individual sections are located in `src/portfolio/sections/`:

- `HeroSection.tsx`
- `AboutSection.tsx`
- `ProjectsSection.tsx`
- `SkillsSection.tsx`
- `ExperienceSection.tsx`
- `TestimonialsSection.tsx`
- `ContactSection.tsx`

## 🌐 Deployment

The project is optimized for deployment on:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the project with `npm run build` and deploy the `dist` folder.

## 📄 License

Private project - All rights reserved

## 👤 Author

Mubarak Gbolahan Oyekanmi

- Full Stack Engineer
- Frontend Specialist
- React Developer

---

Built with ❤️ using React + TypeScript + Vite
