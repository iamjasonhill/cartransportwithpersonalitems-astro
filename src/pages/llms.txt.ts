import type { APIRoute } from 'astro';
import { publicPages, site } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const baseUrl = site.url.replace(/\/$/, '');
  const toAbsoluteUrl = (href: string) => new URL(href, `${baseUrl}/`).toString();
  const pageLines = publicPages.map((page) => `- ${toAbsoluteUrl(page.href)}`);

  return new Response(
    [
      '# llms.txt',
      `Site: ${site.name}`,
      `Canonical: ${site.url}`,
      `Primary sitemap: ${baseUrl}/sitemap.xml`,
      '',
      `- ${baseUrl}/sitemap.xml`,
      `- ${site.url.replace(/\/$/, '')}/sitemap-index.xml`,
      `- ${site.url.replace(/\/$/, '')}/sitemap.html`,
      ...pageLines,
    ].join('\n'),
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    },
  );
};
