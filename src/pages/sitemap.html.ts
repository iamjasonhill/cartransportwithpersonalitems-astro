import type { APIRoute } from 'astro';
import { site } from '../lib/site';

export const prerender = true;

const pages = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/services/core-service/', label: 'Core Service' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
];

export const GET: APIRoute = () => {
  const html = `<!doctype html>
<html lang="en-AU">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${site.name} HTML Sitemap</title>
    <meta name="description" content="HTML sitemap for ${site.name}." />
  </head>
  <body>
    <main>
      <h1>${site.name} HTML Sitemap</h1>
      <ul>
        ${pages.map((page) => `<li><a href="${page.href}">${page.label}</a></li>`).join('')}
      </ul>
    </main>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
};
