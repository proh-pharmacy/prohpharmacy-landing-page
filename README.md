# Proh Pharmacy — Landing Page

> **Reliable medicines, delivered anywhere in Ghana.**  
> Official web platform for Proh Pharmacy, providing dependable retail and wholesale pharmaceutical supply to individuals, clinics, and pharmacies nationwide.

---

## 🌟 Key Features

- **Interactive Ghana Delivery Map**: Interactive regional map visualizing active trekking routes, distribution hubs, and expansion zones across Ghana.
- **Wholesale & Retail Medicine Enquiries**: Clean, responsive contact form tailored for Ghanaian users with 10-digit phone format (`000 0000 000`) and structured subject selection.
- **Classic Minimal Mobile Burger Menu**: Fullscreen translucent green frosted blur overlay (`backdrop-blur-xl`) with smooth right-to-left slide transition, numbered links, and prominent Request Supply CTA.
- **Brand Consistency**: Distinctive color identity combining deep pharmaceutical greens (`#045E1F`, `#022619`, `#087A2D`) with bold red accent action triggers (`#DE2512`).
- **Direct Communication Channels**: One-tap floating WhatsApp action button (FAB) and instant phone/email shortcuts.
- **Production SEO & Structured Data**: Built-in JSON-LD Schema (`PharmacySchema`), dynamic sitemap, robots.txt, and complete OpenGraph/Twitter card metadata.
- **Mobile-First Responsiveness**: Handcrafted for all screen sizes (360px up to 4K displays) with strict horizontal overflow protection.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Standalone Output) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Inter & Pacifico via `next/font/google` |
| **Containerization** | Docker (Multi-stage Node.js Alpine build) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20.x or later
- **npm**: v10.x or later (or `pnpm` / `yarn`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/proh-pharmacy/prohpharmacy-landing-page.git
   cd prohpharmacy-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Docker Deployment

The project includes a production-ready, multi-stage `Dockerfile` that uses Next.js standalone output for minimal image size and non-root security.

### Build the Docker image:
```bash
docker build -t prohpharmacy-landing-page .
```

### Run the container:
```bash
docker run -d -p 3000:3000 --name proh-web prohpharmacy-landing-page
```

Access the application at [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Configuration

Key brand details, contact information, phone numbers, and operational hours can be updated in a single central file:

👉 [`src/config/site.ts`](file:///Users/admin/Desktop/prohpharmacy/landing-page/src/config/site.ts)

```typescript
export const siteConfig = {
  name: "Proh Pharmacy",
  contact: {
    email: "info@prohpharmacy.com",
    phoneDisplay: "+233 (0) XX XXX XXXX",
    phoneHref: "tel:+233000000000",
    whatsappHref: "https://wa.me/233000000000?text=...",
    address: "Accra, Ghana",
    openingHours: "Mon - Sat: 8:00 AM - 8:00 PM",
  },
  // ...
};
```

---

## 📜 Available Scripts

- `npm run dev` — Starts the Next.js development server with Turbopack.
- `npm run build` — Creates an optimized production build with standalone bundle.
- `npm run start` — Starts the Next.js production server.
- `npm run lint` — Runs ESLint to check for code issues.

---

## 🛡️ License & Ownership

Copyright © 2026 **Proh Pharmacy**. All rights reserved.
Accra, Ghana.
