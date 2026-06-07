# Aditi Channavar — Portfolio

A multi-page React portfolio built with Vite + React Router.

## Setup

You need Node.js installed (https://nodejs.org — download LTS version).

### Run locally

```bash
# 1. Open terminal in this folder
cd aditi-portfolio

# 2. Install dependencies (first time only)
npm install

# 3. Start dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

### Build for production (to deploy)

```bash
npm run build
```

This creates a `dist/` folder. Drag that folder to https://netlify.com/drop for a free live link.

## Structure

```
src/
  pages/          # One file per page
    Home.jsx      # Hero + About + Scroll-lock countries
    Travels.jsx
    Hobbies.jsx   # Image slideshow on hover
    Music.jsx     # Genre picker with track placeholders
    Achievements.jsx
    Traits.jsx
    Education.jsx
  components/
    Nav.jsx       # Sticky nav with React Router links
    Footer.jsx    # Footer with social links (update hrefs)
    StickerLayer.jsx  # Drag-drop sticker system
    useReveal.js  # Scroll reveal hook
```

## Updating your info

- **Social links**: `src/components/Footer.jsx` — update the `href` values
- **Music tracks**: `src/pages/Music.jsx` — replace placeholder text with real tracks
- **Hobby images**: `src/pages/Hobbies.jsx` — swap the SVG placeholder in each slide with an `<img>` tag
- **Sticker drawings**: `src/components/StickerLayer.jsx` — replace the symbol strings with your custom SVG stickers

## Add your own stickers (when you draw them)

In `StickerLayer.jsx`, find the `SYMBOLS` array and replace any symbol with an image path:

```jsx
// Instead of spawning a text character, spawn an img
// Change the sticker render in the Sticker component to use your image
```
