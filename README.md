# Personal Academic Website

A modern, responsive academic website template for a Computer Science PhD student, built with React, TypeScript, Tailwind CSS, React Router, Lucide icons, and Framer Motion.

## Run locally

1. Install Node.js 18+.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Create a production build:

```bash
npm run build
```

## Edit content

- Main placeholder content lives in [src/data/siteContent.ts](/Users/madhu/Documents/Projects/Personal%20Site/src/data/siteContent.ts).
- Replace the profile image in [src/assets/profile-placeholder.svg](/Users/madhu/Documents/Projects/Personal%20Site/src/assets/profile-placeholder.svg) or point the `photo` field to your own image.
- Replace the sample CV file at [public/cv-placeholder.pdf](/Users/madhu/Documents/Projects/Personal%20Site/public/cv-placeholder.pdf).

## Structure

- `src/components` for reusable UI pieces
- `src/pages` for routed pages
- `src/data/siteContent.ts` for editable site data
- `src/index.css` for theme tokens and shared styling
