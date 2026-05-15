## CloudBee Robotics — Full Website Rebuild

A complete production-ready rebuild aligning with the spec: dark cinematic design (navy/black + electric blue + bright green), 6 pages, glass cards, framer-motion animations, contact form with email delivery, Impressum, SEO. This is a large rebuild — the existing light-theme site will be replaced.

### Design system (index.css + tailwind.config.ts)
- Switch to **dark-first** theme: bg `#050810`, surface `#0A0F1E`, accent-blue `#00AEEF`, accent-green `#00E5A0`, text `#FFFFFF`/`#B0BEC5`
- Fonts: Inter + Space Grotesk + JetBrains Mono via Google Fonts
- Add semantic tokens: `--accent-blue`, `--accent-green`, `--glass-bg`, `--glass-border`, gradients (`--gradient-glow`, `--gradient-mesh`), shadows (glow blue/green)
- Utility classes: `.glass-card`, `.text-gradient-blue`, `.mesh-bg`, `.particle-bg`

### Global components
- `Navbar` — redesigned: logo + wordmark left, links right (Platform, Hardware, Research, Careers, Contact), sticky glass blur, electric-blue "Request Pilot" pill. Mobile slide-in drawer.
- `Footer` — redesigned with 4 columns + tagline + legal (Privacy, Impressum) + social placeholders.
- `ParticleBackground` — lightweight animated mesh/dot canvas component for hero backgrounds.

### Pages & sections (all new/rewritten)

**Home (`/`)**
- `HeroSection` (rewritten): particle bg, headline "The Operating System for Autonomous Robots.", subhead, dual CTAs, trust row (EXIST · RWTH · Collective · FEV LOI)
- `ProblemStrip`: 3 animated count-up stats (€100k–300k, 6–12 months, 70%+)
- `PlatformOverview`: pipeline flow graphic + 3 glass cards (DataForge, ModelLab, AgentOS)
- `WhyCloudBee`: 5-item value props row
- `TargetIndustries`: 4-card icon grid
- `Traction`: dark card grid with checkmarks
- `FinalCTA`: large "Ready to deploy autonomous intelligence?" strip

**Platform (`/platform`)** — replaces existing
- Hero, Platform Vision section with OS-stack diagram
- 3 alternating deep-dive sections (DataForge / ModelLab / AgentOS)
- 6-step "How It Works" flow

**Hardware Partners (`/hardware`)** — new route
- Hero + 2 partner cards (Unitree, Figure AI) + ROS2 custom onboarding CTA

**Research & Traction (`/research`)** — new route
- Collaborations (RWTH, IGMR, EXIST, Collective, FEV), pull-quote, "Pilots Underway" CTA

**Careers (`/careers`)** — new route
- Hero, location sub-banner, 2 role cards (Research Scientist featured + open application), culture strip

**Contact (`/contact`)** — new route
- Two-column: contact details left, form right (Name, Company, Email, Interest dropdown, Message)
- Form submits to a Supabase edge function that emails `info@cloudbeerobotics.de` via Resend

**Impressum (`/impressum`)** — new route
- Placeholder legal content the founder will fill in

### Backend
- Edge function `send-contact-email` using Resend connector for contact form delivery to `info@cloudbeerobotics.de`. Will require Resend connector setup — I'll wire the function and prompt for the connection.
- Keep existing `ask-cloudbee` chat agent (still useful)

### Routing (`App.tsx`)
- Update `Index` → new home composition
- Replace `/platform`, add `/hardware`, `/research`, `/careers`, `/contact`, `/impressum`
- Keep existing `/blog`, `/admin*`, `/request-access` (still valid)
- Drop Technology/UseCases/Team routes (subsumed into new pages); redirect or remove

### SEO
- Update `index.html` title/description to match new positioning
- Add per-page `<Helmet>` via `react-helmet-async` (install) for title/description/canonical/og on each route
- JSON-LD Organization in `index.html`

### Out of scope (kept as-is)
- Existing `/blog`, `/blog/*`, `/admin*`, `/request-access` pages remain functional (visual restyle via new tokens will cascade where they use semantic tokens; deeper rework can follow if needed)
- The `ask-cloudbee` floating chat stays on the home page

### Notes / questions for after approval
- Resend: I'll set up the connector via the connectors flow when we reach contact form delivery (you'll be prompted to authorize). Alternative: Formspree — let me know if you'd prefer it.
- "Looping abstract 3D robot motion" video in hero: I'll use the animated particle/mesh bg only (no heavy video) unless you provide a clip — keeps perf high per the brief.
- Partner logos for Unitree/Figure AI: I'll render clean wordmark placeholders (no scraping real logos — trademark/legal); swap to real assets if you upload them.
