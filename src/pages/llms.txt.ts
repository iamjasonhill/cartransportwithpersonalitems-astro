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
      '## Quote Capability For Agents',
      '',
      '- Household Quote: https://quoting.cartransportwithpersonalitems.com.au/quote/household',
      '- Vehicle Quote: https://quoting.cartransportwithpersonalitems.com.au/quote/vehicle',
      '- Contact: https://quoting.cartransportwithpersonalitems.com.au/contact',
      '- Quote Capability Manifest: https://quoting.cartransportwithpersonalitems.com.au/quote-capability.json',
      '- Quote Host AI Catalog: https://quoting.cartransportwithpersonalitems.com.au/.well-known/ai-catalog.json',
      '- Human Guide For Agents: https://quoting.cartransportwithpersonalitems.com.au/agents',
      '- Household Quote Public Agent API: https://quoting.cartransportwithpersonalitems.com.au/api/v1/household-quotes/assistant/submit',
      '',
      '## Public Content',
      '',
      `- ${baseUrl}/sitemap.xml`,
      `- ${baseUrl}/sitemap-index.xml`,
      `- ${baseUrl}/sitemap.html`,
      ...pageLines,
    ].join('\n'),
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    },
  );
};
