import fs from 'node:fs';

const failures = [];

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

const packageJson = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const astroConfig = fs.readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
const siteConfigSource = fs.readFileSync(new URL('../src/lib/site.ts', import.meta.url), 'utf8');
const vercelConfig = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));

assert(packageJson.scripts.check, 'package.json is missing the check script');
assert(packageJson.scripts['check:seo'], 'package.json is missing the check:seo script');
assert(
  astroConfig.includes('https://cartransportwithpersonalitems.com.au'),
  'astro.config.mjs no longer includes the live site URL'
);
assert(
  siteConfigSource.includes("name: 'Car Transport With Personal Items'"),
  'site config no longer identifies the site clearly'
);
assert(
  Array.isArray(vercelConfig.headers) && vercelConfig.headers.length >= 1,
  'vercel.json should keep the current security header contract'
);

if (failures.length > 0) {
  console.error('Car Transport With Personal Items SEO checks failed:\n');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Car Transport With Personal Items SEO checks passed.');
