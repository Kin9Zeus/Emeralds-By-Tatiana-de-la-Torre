<div align="center">
  <img src="public/assets/media/Centered_golden_logo_no_background.png" alt="Emeralds by Tatiana De La Torre Logo" width="300" />
  
  # Emeralds by Tatiana De La Torre
</div>

Welcome to the official repository for the **Emeralds by Tatiana De La Torre** website, a premium digital platform designed to showcase and highlight the quality of Colombian emeralds.

This project has been developed following the highest industry standards, ensuring optimal performance, a seamless user experience, and cutting-edge visual design.

## 💎 Key Features

* **Premium UI/UX Design:** A sophisticated and modern user interface focused on highlighting the natural beauty of emeralds through the use of whitespace, elegant typography, and an immersive color palette.
* **Fluid Animations (GSAP & Framer Motion):** Implementation of advanced animations powered by GSAP and Motion, including parallax effects, staggered reveals, and smooth transitions that enrich the browsing experience.
* **Smooth Scrolling (Lenis):** Integration of Lenis for natural and smooth scrolling throughout the entire page, drastically enhancing the site's premium feel.
* **Advanced SEO Optimization:** Dynamic metadata and structured data markup (JSON-LD) to maximize search engine visibility, ensuring excellent organic ranking.
* **Fully Responsive:** Perfect adaptation to any device (mobile, tablet, and desktop), providing the best experience regardless of screen resolution.
* **Exceptional Performance:** Modern architecture using Next.js App Router, with automatic optimization of static images and fonts, achieving minimal load times.

## 🛠️ Tech Stack

The project is built using modern, efficient, and highly scalable technologies:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) for robust, secure, and error-free code.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for agile component design and a consistent design system.
* **Animations:** [GSAP](https://gsap.com/) and [Framer Motion](https://www.framer.com/motion/)
* **Scroll:** [Lenis](https://lenis.studiofreight.com/)

## 🚀 Local Installation & Setup

To build and run this project in a local development environment, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd emeralds-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the application.

## 📦 Production Deployment

To build the project and prepare it for a production environment (e.g., Vercel, AWS, etc.):

```bash
npm run build
npm run start
```

## 📐 Project Structure

The source code architecture follows modular design and scalability principles:

- `/src/app`: Application routes, global SEO configuration (sitemap, robots.txt), and main styles.
- `/src/components`: Reusable, strictly typed components organized into:
  - `/sections`: Main visual sections of the page (Hero, Origin, Trust, etc.).
  - `/ui`: Global graphical interface elements (Navbar, Footer, buttons).
  - `/providers`: Context providers for animation and scroll lifecycles.
  - `/seo`: Components for injecting structured data for web crawlers.
- `/public`: Optimized static assets, including images, background videos, and multi-platform favicons.

---
*Developed with strict professionalism, focused on performance and attention to detail.*