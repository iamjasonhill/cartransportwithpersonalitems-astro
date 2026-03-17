import type { APIRoute } from 'astro';
import { site } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const baseUrl = site.url.replace(/\/$/, '');
  const trustPages = Array.isArray(site.trustLinks) ? site.trustLinks : [];
  const pages = [
    `${baseUrl}/sitemap-index.xml`,
    `${baseUrl}/sitemap.html`,
    `${baseUrl}/`,
    `${baseUrl}/services/`,
    `${baseUrl}/services/core-service/`,
    `${baseUrl}/about/`,
    `${baseUrl}/contact/`,
    ...trustPages.map((page) => new URL(page.href, `${baseUrl}/`).toString()),
  ].filter((page, index, collection) => collection.indexOf(page) === index);

  return new Response(
    [
      '# llms.txt',
      `Site: ${site.name}`,
      `Canonical: ${site.url}`,
      `Primary sitemap: ${baseUrl}/sitemap-index.xml`,
      '',
      ...pages.map((page) => `- ${page}`),
    ].join('\n'),,
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    },
  );
};
