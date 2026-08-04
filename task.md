# Task Checklist - Developer Portfolio for Prithvi Patel

## Phase 1: Project Setup & Data Architecture
- [x] Scaffold Next.js 14+ (App Router) + TypeScript + Tailwind CSS project in root directory
- [x] Install core dependencies: `framer-motion`, `lucide-react`, `simple-icons`, `react-hook-form`, `clsx`, `tailwind-merge`
- [x] Configure typography (JetBrains Mono & Inter via `next/font/google`) and dark theme styling in `src/app/globals.css` and `tailwind.config.ts`
- [x] Create data files in `src/data/`:
  - [x] `personal.ts` (Owner info, social links, bio summary)
  - [x] `skills.ts` (Categorized skills: Languages, Frontend, Backend, Databases, Tools)
  - [x] `projects.ts` (Meal Planner, AI Document Analyzer, ALTURA Coffee, CarVerse with highlights, tech stacks, links)
  - [x] `education.ts` (B.Tech CSE timeline entry)

## Phase 2: Core Components & Interactive Features
- [x] **Boot Screen (`src/components/BootScreen.tsx`)**
  - [x] 1–1.5s terminal boot animation (`> initializing_portfolio... 100%`)
  - [x] Click-to-skip functionality & `sessionStorage` session persistence
- [x] **Navbar (`src/components/Navbar.tsx`)**
  - [x] Sticky backdrop blur header with `<PP />` gradient logo
  - [x] Smooth scrolling links: About, Skills, Projects, Education, Contact
  - [x] Top-right Resume download CTA button
- [x] **Hero Section (`src/components/Hero.tsx` & `src/components/Typewriter.tsx`)**
  - [x] "Hi, I'm Prithvi 👋" greeting line
  - [x] Typewriter text cycling through roles ("Full-Stack Developer", "Django & React Engineer", "Problem Solver")
  - [x] One-line bio summary + "View Projects" & "Download Resume" CTAs + Social icon badges
- [x] **Skills Module — Centerpiece ⭐ (`src/components/Skills.tsx` & `src/components/TechIcon.tsx`)**
  - [x] Filterable category tabs: All, Languages, Frontend, Backend, Databases, Tools
  - [x] Interactive skill cards with official tech brand logos (`simple-icons` / `lucide-react`)
  - [x] Scale-up on hover, subtle glowing borders, and floating custom tooltips with skill details
- [x] **Projects Section (`src/components/Projects.tsx`)**
  - [x] Grid of 4 project cards with preview mockups
  - [x] Default state: image, title, stack tags
  - [x] Hover state: smooth crossfade overlay revealing key bullet achievements & GitHub/Demo links
- [x] **Education Section (`src/components/Education.tsx`)**
  - [x] Timeline card view for B.Tech in CSE (Cyber Security) at LJIET
- [x] **Contact Section & API Route (`src/components/Contact.tsx` & `src/app/api/contact/route.ts`)**
  - [x] Form with `react-hook-form` validating Name, Email, and Message
  - [x] Serverless API handler ready for EmailJS / SMTP credentials
  - [x] Direct contact cards for Email, GitHub, LinkedIn
- [x] **Footer & Easter Egg (`src/components/Footer.tsx`)**
  - [x] Hidden developer `console.log` message on page initialization
  - [x] Developer humor footer tooltip ("built with ☕ and questionable sleep")

## Phase 3: Assets, Styling & Optimizations
- [x] Generate project preview images in `public/images/projects/`
- [x] Place `resume.pdf` in `public/`
- [x] Implement Framer Motion `whileInView` scroll-triggered animations across all sections
- [x] Configure SEO meta tags (title, description, OpenGraph) in `layout.tsx`

## Phase 4: Verification & Quality Assurance
- [x] Verify `sessionStorage` boot screen logic across browser reloads
- [x] Test mobile, tablet, and desktop responsiveness
- [x] Run `npm run build` to confirm zero TypeScript compilation errors
- [x] Run `npm run lint` to enforce clean code guidelines
