# Homepage Redesign — Capability Factory for Agentic Physical AI

Scope is **homepage only** (`src/pages/Index.tsx` and `src/components/home/*`). Product, Solution, Research, Team, Careers, Contact, Blog, News, Admin, Impressum stay untouched in this pass (legal fixes tracked separately at the bottom).

All existing videos, demo assets, Backed By, News, and social-proof content are **kept** — only their presentation changes.

## New homepage section order

1. **Hero** — headline, subheadline, value-flow chips, CTAs, cinematic carousel (rebuilt)
2. **Trust strip** — existing logos, slimmer
3. **Capability Story** — the 9-step primary story rendered as a scroll-anchored vertical flow (Process → … → Capability Intelligence)
4. **How Capabilities Are Created** — Human Workforce vs CloudBee side-by-side comparison
5. **Problem** — "Physical AI Development Is Broken" (rewrite of ProblemAdvantage)
6. **Capability Compiler** (flagship) — inputs → interactive graph → outputs
7. **Workforce Analogy** — vocational skills → capability graph
8. **Safety & Validation** — flow diagram + copy
9. **Compliance Intelligence** — bullet grid
10. **Multimodal Synthetic Experience** — 4 source types × output modalities
11. **Multimodal Learning** — VLA / World / RL / IL / Reward models
12. **Autonomous OS** — Plan→Execute→Verify→Recover→Learn loop
13. **Industrial Automation Focus** — Warehouse + Industrial Automation grids (keep existing videos here)
14. **Why CloudBee** — 6 cards (Process First, Capability Engineering, Safety Built In, Validation First, Multimodal Experience, Continuous Improvement)
15. **Capability Intelligence (Moat)** — single-statement section, no mention of KnowGraph
16. **Investor section** — "Building the Infrastructure Layer for Physical AI"
17. **Future Capability Marketplace** — package cards
18. **Founder keynote** (keep)
19. **News** (keep, unchanged)
20. **Final CTA** (keep, restyled)
21. **Backed By** (kept at bottom)

## Hero carousel rebuild

Keep all 6 existing slides (videos + images already in `src/assets/videos/*` and `src/assets/hero/*`). New behavior:
- True autoplay with `preload="metadata"`, `playsInline`, `muted`, `loop`
- Lazy-load non-current slides; only the active `<video>` is mounted with `autoPlay`
- Cinematic crossfade + subtle Ken-Burns scale on enter
- Slide labels match the new story: Capability Compiler · Safety & Validation · Synthetic Experience · Foundation Models · Autonomous Deployment · Continuous Improvement
- Larger, edge-to-edge framing on desktop; full-bleed on mobile with rounded corners only on lg+
- Progress segments + 01/06 counter retained, restyled
- Pause on tab blur (visibilitychange)

## Design system / feel

Stripe storytelling, OpenAI clarity, Vercel polish, Linear simplicity, Apple spacing.
- Large display headlines (`text-5xl` → `text-7xl` for section H2s)
- Generous vertical rhythm (`py-28 lg:py-40` between story acts)
- Calm motion: `framer-motion` with `whileInView`, 0.6–0.8s ease-out, single direction
- Use existing tokens only — `--background`, `--foreground`, `--accent-blue`, `--accent-green`, `--surface`, `--border`, `text-gradient-blue`
- No emojis, no buzzword chips overload; copy is concise

## Components to create

- `src/components/home/CapabilityStory.tsx` — 9-step vertical flow
- `src/components/home/HumanVsCloudBee.tsx` — comparison
- `src/components/home/CapabilityCompiler.tsx` — flagship inputs/outputs + animated graph
- `src/components/home/WorkforceAnalogy.tsx`
- `src/components/home/SafetyValidation.tsx`
- `src/components/home/ComplianceIntelligence.tsx`
- `src/components/home/SyntheticExperience.tsx`
- `src/components/home/MultimodalLearning.tsx`
- `src/components/home/AutonomousOS.tsx`
- `src/components/home/IndustrialFocus.tsx` (wraps existing demo videos)
- `src/components/home/WhyCloudBee.tsx` (rewrite existing)
- `src/components/home/CapabilityIntelligence.tsx`
- `src/components/home/InvestorSection.tsx`
- `src/components/home/CapabilityMarketplace.tsx` (replaces current SkillMarketplace on home)

## Components to rewrite

- `HeroSection.tsx` — new headline + carousel behavior
- `ProblemAdvantage.tsx` → renamed conceptually, "Physical AI Development Is Broken"
- `Index.tsx` — new section ordering, Backed By moved to bottom

## Components left intact (still rendered)

- `DemoGallery`, `FounderKeynote`, `HomeNews`, `FinalCTA`, `TrustStrip`, `AskCloudBee`

## SEO / agent optimization

- Update `index.html` `<title>` + meta description to "Capability Factory for Agentic Physical AI"
- Add JSON-LD `Organization` + `SoftwareApplication` blocks in `index.html`
- Add `public/llms.txt` with machine-readable summaries for: CloudBee Robotics, Capability Compiler, Safety & Validation Engine, Synthetic Experience Engine, Autonomous OS
- `robots.txt` and `sitemap.xml` already correct — leave unchanged

## Out of scope (explicitly NOT changed)

- Product, Solution, Research, Team, Careers, Contact, Blog, BlogPost*, Admin, RequestAccess, UseCases, Technology, Home (legacy), NotFound
- Impressum / Privacy legal copy — flagged for follow-up; will not touch without the actual company info you want inserted

## Verification

After edits: build runs automatically, then I'll open the preview and confirm hero carousel autoplays, sections render in order, and no console errors.

Reply **approve** to build, or tell me what to cut/add.
