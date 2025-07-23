# Summ3r Cod3

A brutalist-style website built with Astro.js that displays coding projects organized by year.

![Summ3r Cod3 Screenshot](https://via.placeholder.com/800x400?text=Summ3r+Cod3+Screenshot)

## 🎨 Design

This project features a brutalist web design with a minimalist color scheme:

- Primary color: #212121 (60% - Dark gray/almost black)
- Secondary color: #FFFFFF (30% - White)
- Accent color: #755AFB (10% - Purple)

The design emphasizes raw, functional aesthetics with bold typography, high contrast, and geometric shapes.

## 📋 Features

- Display coding projects organized by year
- Responsive grid layout for project cards
- Brutalist styling with the specified color scheme
- Technology tags for each project
- Mobile-friendly design

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro  # Main page with project listing
└── package.json
```

The main implementation is in `src/pages/index.astro`, which includes:

1. Project data organized by year in the frontmatter section
2. HTML structure for displaying projects in a responsive grid
3. CSS styling with brutalist design principles

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
