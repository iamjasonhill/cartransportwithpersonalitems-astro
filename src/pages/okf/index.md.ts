import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const body = "---\ntype: Index\ntitle: Cartransportwithpersonalitems OKF\nresource: https://cartransportwithpersonalitems.com.au/\n---\n\n# Cartransportwithpersonalitems Open Knowledge Index\n\nCartransportwithpersonalitems is an active fleet marketing website. The site exposes public service, support, legal, and action-path information for agents and search systems.\n\n## Primary Resources\n\n- [Home](https://cartransportwithpersonalitems.com.au/)\n- [privacy](https://cartransportwithpersonalitems.com.au/privacy/)\n- [terms](https://cartransportwithpersonalitems.com.au/terms/)\n\n## Action Resources\n\n- [Action 1](https://quotes.moveroo.com.au/embed/vehicle-assistant/v1/loader.js)\n\n## Agent Notes\n\nUse the public website for crawlable content and legal information. Quote, booking, contact, portal, or assistant actions may be handled by linked subdomains or application surfaces.\n";

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
