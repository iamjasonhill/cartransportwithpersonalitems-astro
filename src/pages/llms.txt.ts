import type { APIRoute } from 'astro';
import { site } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = () => {
  return new Response(
    [
      '# llms.txt',
      `Site: ${site.name}`,
      `Canonical: ${site.url}`,
      `Primary sitemap: ${site.url.replace(/\/$/, '')}/sitemap-index.xml`,
      '',
      `- ${site.url.replace(/\/$/, '')}/sitemap-index.xml`,
      `- ${site.url.replace(/\/$/, '')}/sitemap.html`,
      `- ${site.url.replace(/\/$/, '')}/`,
      `- ${site.url.replace(/\/$/, '')}/services/`,
      `- ${site.url.replace(/\/$/, '')}/services/core-service/`,
      `- ${site.url.replace(/\/$/, '')}/about/`,
      `- ${site.url.replace(/\/$/, '')}/contact/`,
      `- ${site.url.replace(/\/$/, '')}/privacy/`,
      `- ${site.url.replace(/\/$/, '')}/terms/`,
    ].join('\n'),
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    },
  );
};
