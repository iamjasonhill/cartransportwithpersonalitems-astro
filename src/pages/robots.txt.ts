import type { APIRoute } from 'astro';
import { site } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${site.url.replace(/\/$/, '')}/sitemap-index.xml`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
};
