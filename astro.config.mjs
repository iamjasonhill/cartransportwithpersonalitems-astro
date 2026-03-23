import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const excludedSitemapPaths = new Set([
  '/brand-test',
  '/services/core-service',
  '/sitemap.html',
]);

export default defineConfig({
  site: 'https://cartransportwithpersonalitems.com.au',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !excludedSitemapPaths.has(pathname);
      },
			serialize: (item) => ({
				...item,
				lastmod: resolveSitemapLastmod(item.url),
			}),
		}),
  ],
});

const sitemapSourceRoot = path.join(fileURLToPath(new URL(".", import.meta.url)), "src", "pages");
const sitemapSourceExtensions = [".astro", ".md", ".mdx", ".html", ".js", ".ts"];

const sitemapSourceCandidates = (pathname) => {
	const normalized = pathname === "/" ? "" : pathname.replace(/^\/+|\/+$/g, "");
	const bases = normalized === "" ? ["index"] : [`${normalized}/index`, normalized];

	return bases.flatMap((candidate) => sitemapSourceExtensions.map((extension) => `${candidate}${extension}`));
};

const resolveSitemapLastmod = (pageUrl) => {
	try {
		const pathname = new URL(pageUrl).pathname;

		for (const candidate of sitemapSourceCandidates(pathname)) {
			const absolutePath = path.join(sitemapSourceRoot, candidate);

			if (fs.existsSync(absolutePath)) {
				return fs.statSync(absolutePath).mtime;
			}
		}
	} catch {
		return new Date();
	}

	return new Date();
};
