# CloudBee Robotics website

Public marketing website for CloudBee Robotics, built with React, TypeScript,
Vite and Tailwind CSS. Pages explain customer benefits, the pilot programme,
the team and career opportunities. Proprietary robotics methods and customer
project details do not belong in this repository or its public assets.

## Local development

Use Node.js 22.

```sh
cp .env.example .env.local
npm ci
npm run dev
```

Set the Supabase URL and **publishable** key in the ignored `.env.local` file.
All `VITE_` variables appear in the browser bundle. Never use a service-role key,
provider key, webhook secret or password in a `VITE_` variable.

## Verification

```sh
npm run lint
npx tsc --noEmit -p tsconfig.app.json
npm run check:public
```

The public check builds the site, scans shipped copy/assets and current source,
and tests confidentiality answers and protected notification endpoints without
sending emails. It catches known disclosures and secret patterns; it does not
replace human review of new copy, images or media.

## Publishing

Follow [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel and Supabase setup.
`vercel.json` deploys only `dist` and runs the public check before publication.

To prepare a new public repository without local files or previous Git history:

```sh
npm run export:public -- ../agentic-robotics-public
```

The export has no `.git`, `.env.local`, private media or administrative setup
backups. Start a new Git repository in that directory. Exporting does not remove
old commits from an existing remote repository, its forks or caches.

## Editorial rules

- Publish customer benefits and company information. Keep internal methods,
  training workflows, tooling screens and technical roadmaps private.
- Do not publish customer names, logos or identifiable project results.
- Inspect imagery and every video frame for slides, documents and private data.
- Blog articles start as drafts. Public copy and cover imagery require an
  explicit marketing/confidentiality review before publication.
- The shared thesis application deadline is in `src/data/theses.ts`.
