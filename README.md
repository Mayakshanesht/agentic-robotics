# CloudBee Robotics website

Public marketing website for CloudBee Robotics, built with React, TypeScript,
Vite and Tailwind CSS. The original pages, product descriptions, research,
photography and demonstration videos have been restored at the owner's request.
The careers application deadline remains 30 October 2026. Credentials and
administrative setup backups remain outside the publication tree.

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

The public check builds the site, scans shipped files and current source for
credentials, verifies registered original media fingerprints, checks the careers
deadline, and tests protected notification endpoints without sending emails.
It preserves the original public content rather than filtering technical copy.

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

## Publication checks

- The restored website follows the original content and media in commit `64c7e1a`.
- Never commit passwords, provider keys, private keys or service-role credentials.
- Register approved media files and their SHA-256 fingerprints in
  `scripts/reviewed-marketing-media.json` so accidental replacements are caught.
- Blog articles use the original published/draft behavior and admin access rules.
- The shared thesis application deadline is in `src/data/theses.ts`.
