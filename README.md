# Gebeta Restaurant — Website Redesign

A modern, fast, mobile-first website for **Gebeta Restaurant**, an authentic Ethiopian restaurant in Minneapolis, Minnesota.

Built with **React + Vite + Tailwind CSS**. No database, no backend, no e-commerce — just a beautiful, performant static site.

---

## Quick Start

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Footer.tsx       # Footer with nav, contact, hours, social
│   ├── Hero.tsx         # Full-screen hero with CTAs
│   ├── FeaturedDishes.tsx
│   ├── OurStory.tsx
│   ├── MenuPreview.tsx  # Category cards linking to full menu
│   ├── Gallery.tsx      # Lazy-loaded image grid
│   ├── Testimonials.tsx
│   ├── VisitUs.tsx      # Map embed, hours, WhatsApp button
│   └── ScrollManager.tsx
├── pages/
│   ├── HomePage.tsx     # All home sections
│   └── MenuPage.tsx    # Searchable, filterable menu
├── data/
│   ├── menu.json       # ← EDIT MENU ITEMS HERE
│   └── menu.ts         # Types, restaurant info, helpers
├── App.tsx             # Hash-based router
├── main.tsx
└── index.css           # Tailwind + base styles
```

---

## Editing the Menu

All menu data lives in **`src/data/menu.json`**. Staff can edit this file without touching any layout code.

### Adding a new dish

```json
{
  "id": "unique-dish-id",
  "name": "Dish Name",
  "category": "tibs",
  "price": 15.99,
  "description": "Short description shown on the card.",
  "image": "https://images.pexels.com/photos/...",
  "featured": true
}
```

| Field         | Required | Notes                                                        |
| ------------- | -------- | ----------------------------------------------------------- |
| `id`          | Yes      | Unique identifier (no spaces, use hyphens)                  |
| `name`        | Yes      | Display name                                                |
| `category`    | Yes      | Must match a category `id` from the `categories` array     |
| `price`       | Yes      | Number in USD (no `$` sign)                                |
| `description` | Yes      | 1–2 sentence description                                    |
| `image`       | No       | URL to dish photo. Omit to show text-only card              |
| `featured`    | No       | `true` shows it in the "Featured Dishes" section on home    |

### Adding a new category

Add an entry to the `categories` array:

```json
{
  "id": "soups",
  "name": "Soups",
  "description": "Warming Ethiopian soups and broths."
}
```

Then add dishes with `"category": "soups"`.

---

## Replacing Images

All images are loaded from **Pexels** (free stock photos) via URL. To use your own photos:

1. Upload images to your hosting provider (e.g., `public/images/`).
2. Replace the Pexels URL in the component or `menu.json` with your local path:
   ```json
   "image": "/images/doro-wot.jpg"
   ```
3. For best performance, use **WebP** format and keep images under **200KB** each.

### Key image locations

| Component         | Where to change                          |
| ----------------- | --------------------------------------- |
| Hero background   | `src/components/Hero.tsx`               |
| Our Story image   | `src/components/OurStory.tsx`           |
| Gallery images    | `src/components/Gallery.tsx`             |
| Featured dishes   | `src/data/menu.json` (`image` field)    |
| Menu page dish    | `src/data/menu.json` (`image` field)     |

---

## Restaurant Information

All contact details, hours, and social links are in **`src/data/menu.ts`** under the `RESTAURANT` constant. Update phone, address, hours, WhatsApp, and social links there.

---

## Deployment Guide (Shared Hosting)

This project produces a **fully static site** in `dist/` — perfect for shared hosting (cPanel, HostGator, Bluehost, etc.).

### Step 1: Build

```bash
npm run build
```

This creates a `dist/` folder with all HTML, CSS, JS, and assets.

### Step 2: Upload

1. Log into your hosting control panel (cPanel, etc.).
2. Open **File Manager** → `public_html` (or your web root).
3. Upload **all contents** of the `dist/` folder to `public_html/`.
   - Or use FTP (FileZilla) to upload the `dist/` contents.
4. Make sure `index.html` is at the root of `public_html/`.

### Step 3: Verify

Visit your domain. The site should load immediately.

### Using a subfolder

If deploying to a subfolder (e.g., `domain.com/gebeta/`), no changes needed — the hash-based router works from any path.

---

## Performance Notes

- **No heavy JavaScript** — only React + Lucide icons, ~50KB gzipped total.
- **Lazy loading** — gallery and menu images use `loading="lazy"`.
- **Font optimization** — Google Fonts loaded with `preconnect` and `display=swap`.
- **Responsive images** — Pexels URLs use `auto=compress` and sized `w` parameters.
- **No animations** beyond subtle CSS transitions — keeps CPU usage low.
- **Hash-based routing** — no server config needed for client-side routes.

---

## SEO

- Meta title, description, and keywords in `index.html`.
- Open Graph and Twitter Card tags included.
- **Restaurant schema** structured data (JSON-LD) in `index.html` — update address, phone, and hours to match.
- Semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, `<footer>`).
- All images include descriptive `alt` text.
- Proper heading hierarchy (single `<h1>` per page).

---

## Accessibility

- WCAG AA color contrast (cream on espresso, gold accents).
- Keyboard-navigable navigation and menu filters.
- `aria-label` on icon-only buttons.
- `aria-expanded` on mobile menu toggle.
- Focus-visible outlines on all interactive elements.

---

## Tech Stack

| Tool           | Purpose                          |
| -------------- | -------------------------------- |
| React 18       | UI framework                     |
| Vite 5         | Build tool & dev server          |
| Tailwind CSS 3 | Styling                          |
| Lucide React   | Icons (tree-shaken)              |
| TypeScript     | Type safety                      |

---

## License

© Gebeta Restaurant. All rights reserved.
