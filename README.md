# MEI - Premium Next.js Agency & Portfolio Template

![MEI Template Banner](public/hero_mockup_en.png)

MEI is a premium, high-performance, and meticulously crafted Next.js template designed specifically for creative agencies, digital studios, freelancers, and startups. Built with Next.js 14+, Tailwind CSS, and Framer Motion, it offers a breathtaking user experience with smooth animations, glassmorphism effects, and a modern aesthetic.

## 🌟 Key Features

*   **Built with Next.js 14+ (App Router):** Leveraging the latest React features for optimal performance and SEO.
*   **Static Export Ready:** Easily deploy to any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages) without needing a Node.js server.
*   **Tailwind CSS v4:** Rapid, utility-first styling with the latest Tailwind features.
*   **Framer Motion Animations:** Smooth, 60fps scrolling animations, page transitions, and micro-interactions.
*   **Fully Responsive:** Pixel-perfect design on mobile, tablet, and desktop screens.
*   **Centralized Configuration:** Edit 90% of the site's content (text, links, portfolio, services) from a single `src/config/site.js` file.
*   **Custom Inline Portfolio:** Modern "expand-in-place" case study viewing on mobile and desktop without clunky modals.
*   **Premium Glassmorphism:** Aesthetic blur effects and layered shadows for a high-end feel.
*   **4 Pre-built Demo Pages:** Included project detail pages demonstrating versatility.
*   **Ready-to-use Legal Pages:** Includes Privacy Policy, Terms of Service, and FAQ layouts.
*   **Zero Console Errors:** Clean, linted, and production-ready code.

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have Node.js (v18.x or later) installed on your machine.

### 1. Installation

Extract the template files, open your terminal in the project directory, and run:

```bash
npm install
```
*(Note: The `node_modules` folder is intentionally excluded from the download files to keep the zip file size small. Running the command above will automatically download and install all necessary dependencies for you.)*

### 2. Development

To start the local development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Production Build & Export

This template is configured for **Static Export**. To build the project for production:

```bash
npm run build
```
This will generate an `out` directory containing the static HTML/CSS/JS assets. You can upload the contents of this `out` folder directly to any static hosting provider.

## ✏️ How to Customize the Content

We've made customizing this template incredibly easy. You **do not** need to dig through dozens of React components to change text. 

Almost all content is centralized in one file:
`src/config/site.js`

### Changing Header & Footer Links
Open `src/config/site.js` and look for the `navLinks` and `footerLinks` arrays. You can easily change the names and URLs.

### Updating Portfolio Projects
In `src/config/site.js`, locate the `projects` array. Each object represents a project.

```javascript
{
  title: "Your Project Name",
  category: "Web Design",
  description: "Short description for the card.",
  longDescription: "Long description for the expanded case study.",
  challenge: "What was the problem?",
  result: "What was the outcome?",
  image: "/portfolio/your-image.png", // Place image in public/portfolio/
  demoUrl: "https://yourlink.com",
  tags: ["React", "Tailwind"],
}
```

### Changing Colors & Styling
The template relies heavily on Tailwind CSS. If you want to change the global background color (currently `#F4F3EE`), you can find and replace it in the component files (`src/components/*.jsx`) or define it in your `globals.css`.

### Updating Images
All images are stored in the `/public` directory. Simply replace the images in the respective folders (`/public/portfolio`, `/public/services`, etc.) keeping the same filenames, OR upload new images to `/public` and update the paths in `src/config/site.js`.

## 🚢 Deployment

Because this template uses `output: 'export'` in `next.config.mjs`, deployment is incredibly simple and cheap (often free).

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to Vercel, click "Add New Project", and select your repository.
3. Vercel will automatically detect Next.js.
4. Click "Deploy". Vercel will automatically run `npm run build` and serve the `out` directory.

### Deploying to cPanel / Shared Hosting
1. Run `npm run build` on your local machine.
2. Zip the contents of the generated `out` folder.
3. Upload the zip file to your `public_html` directory via cPanel File Manager and extract it.

## 🛠️ Tech Stack

*   **Framework:** Next.js 14+ (App Router)
*   **Styling:** Tailwind CSS v4
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **UI Components:** Radix UI primitives (via shadcn/ui)

## 💬 Support

If you need any help with setting up the template or have any questions, please reach out via the marketplace support tab. We aim to respond within 24 hours.

---
*Thank you for purchasing MEI Template! If you like it, please don't forget to rate it 5 stars! ⭐️⭐️⭐️⭐️⭐️*
