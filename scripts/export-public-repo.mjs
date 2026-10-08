import { cp, mkdir, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const destination = path.resolve(process.argv[2] ?? "");
if (!process.argv[2] || destination === root || destination.startsWith(root + path.sep)) {
  throw new Error("Supply a new destination outside this repository, for example npm run export:public -- ../agentic-robotics-public");
}
try {
  await access(destination);
  throw new Error("Destination already exists; refusing to overwrite it.");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

// An explicit publication list prevents local secrets, backups and Git history
// from entering a new public source repository or deployment upload.
const publish = [
  "src", "public", "scripts", "supabase", "index.html", "package.json", "package-lock.json",
  "components.json", "tailwind.config.ts", "postcss.config.js", "vite.config.ts", "vercel.json",
  "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json", "eslint.config.js",
  ".gitignore", ".vercelignore", ".env.example", "README.md", "DEPLOYMENT.md",
];
await mkdir(destination, { recursive: true });
for (const name of publish) {
  await cp(path.join(root, name), path.join(destination, name), {
    recursive: true,
    errorOnExist: true,
    filter: (source) => {
      const relative = path.relative(root, source);
      return !/^supabase[\\/](?:\.temp|\.branches)(?:[\\/]|$)/.test(relative);
    },
  });
}
console.log(`Created clean public source at ${destination}. No Git history, local environment files or private archives were copied.`);
