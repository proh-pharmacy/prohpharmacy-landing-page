# Contributing to Proh Pharmacy

Thank you for your interest in contributing to the **Proh Pharmacy** web platform. We welcome contributions that improve code quality, enhance user experience, optimize performance, and ensure reliability across all devices.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Development Workflow](#-development-workflow)
- [Coding & Design Standards](#-coding--design-standards)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Getting Help](#-getting-help)

---

## 🤝 Code of Conduct

We are committed to providing a welcoming, respectful, and inclusive environment for everyone. Contributors are expected to:
- Communicate with empathy, clarity, and professionalism.
- Respect differing perspectives and constructive feedback.
- Focus on what is best for the platform, the healthcare community, and end-users across Ghana.

---

## 💡 How Can I Contribute?

You can contribute in several ways:
- **Reporting Bugs**: Open an issue describing the unexpected behavior, steps to reproduce, device/browser details, and screenshots if applicable.
- **Suggesting Enhancements**: Propose new features or design improvements that align with Proh Pharmacy's pharmaceutical mission.
- **Submitting Pull Requests**: Implement bug fixes, performance optimizations, accessibility improvements, or responsive design polish.

---

## 🛠️ Development Workflow

### 1. Prerequisites
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher (or `pnpm` / `yarn`)
- **Docker** (optional, for container validation)

### 2. Fork & Clone
```bash
# Clone your fork or the official repository
git clone https://github.com/proh-pharmacy/prohpharmacy-landing-page.git
cd prohpharmacy-landing-page
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Create a Feature Branch
Always create a descriptive branch off `main`:
```bash
# Features: feat/feature-name
git checkout -b feat/prescription-refill-modal

# Bug fixes: fix/issue-description
git checkout -b fix/mobile-menu-scroll
```

### 5. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your changes with Turbopack fast refresh.

### 6. Verify Locally Before Submitting
Always run the build and linter to ensure zero regressions:
```bash
# Run ESLint
npm run lint

# Validate TypeScript & production build
npm run build
```

---

## 🎨 Coding & Design Standards

### 1. Brand Identity & Colors
Proh Pharmacy maintains a distinctive brand palette combining clean pharmaceutical greens with vibrant action red triggers. Use defined theme variables:
- **Deep Green**: `#045E1F` / `#022619`
- **Primary Green**: `#087A2D`
- **Bright Accent Green**: `#01A42F` / `#34D399`
- **Light Green Tint**: `#F1FBF4` / `#F4F9F6`
- **Red Action Accent**: `#DE2512` (hover: `#C51F0E`)

### 2. Responsive Design & Viewport Safety
- **Mobile-First**: Design and test on small screens (360px–500px) as well as desktop viewports.
- **Zero Horizontal Overflow**: Never introduce elements with fixed widths or off-screen translations that expand `max-width: 100vw`. Always use `overflow-hidden` on positioned containers.
- **Generous Touch Targets**: Ensure interactive elements on mobile have minimum 44×44px hit areas.

### 3. Medical & Content Integrity
- **No Medical Claims**: Never invent unverified medical claims or guarantees in UI copy.
- **Authentic Localization**: Keep contact formats tailored to Ghana (10-digit phone numbers: `000 0000 000`, WhatsApp integration, regional coverage).
- **Centralized Configuration**: Update global branding, phone numbers, and operational hours in [`src/config/site.ts`](src/config/site.ts) rather than hardcoding.

### 4. Component Architecture
- Place reusable UI elements in `src/components/ui/`.
- Place page layouts and global navigation in `src/components/layout/`.
- Place domain-specific logic in `src/features/[feature-name]/`.

---

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps generate clean changelogs and maintain a readable Git history.

Format: `<type>(<scope>): <subject>`

### Common Types:
- `feat`: A new user-facing feature or enhancement.
- `fix`: A bug fix.
- `docs`: Documentation updates (e.g., `README.md`, `CONTRIBUTOR.md`).
- `style`: Changes that do not affect the meaning of the code (white-space, formatting).
- `refactor`: Code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `ci`: Changes to build, Docker, or workflow configuration.

### Examples:
- `feat(delivery): add interactive hover states for Ashanti distribution hubs`
- `fix(header): prevent horizontal viewport overflow during drawer transition`
- `docs: update contributor guidelines for local setup`

---

## 🚀 Pull Request Process

1. **Keep PRs Focused**: Limit each PR to a single feature or bug fix.
2. **Test Changes**: Ensure `npm run build` succeeds without TypeScript or lint errors.
3. **Include Visuals**: For UI changes, attach before-and-after screenshots or recordings (desktop and mobile viewports).
4. **Link Issues**: If your PR resolves an existing issue, reference it (e.g., `Fixes #12`).
5. **Review & Rebase**: Keep your branch up to date with `main` to ensure clean merges.

---

## 📬 Getting Help

If you have questions, reach out through:
- **GitHub Issues**: For bug reports, discussions, and feature requests.
- **Direct Enquiries**: [info@prohpharmacy.com](mailto:info@prohpharmacy.com)

Thank you for helping make Proh Pharmacy dependable and accessible across Ghana!
