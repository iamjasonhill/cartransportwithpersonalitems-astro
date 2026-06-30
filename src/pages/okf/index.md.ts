import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const body = "---\ntype: Index\ntitle: Car Transport With Personal Items OKF\nresource: https://cartransportwithpersonalitems.com.au/\n---\n\n# Car Transport With Personal Items Open Knowledge Index\n\nCar Transport With Personal Items is an active fleet marketing website. The site exposes public service, support, legal, quote, and agent-readable action-path information for agents and search systems.\n\n## Primary Resources\n\n- [Home](https://cartransportwithpersonalitems.com.au/)\n- [AI Catalog](https://cartransportwithpersonalitems.com.au/.well-known/ai-catalog.json)\n- [LLMs Text](https://cartransportwithpersonalitems.com.au/llms.txt)\n\n## Quote And Contact Resources\n\n- [Household Quote](https://quoting.cartransportwithpersonalitems.com.au/quote/household)\n- [Vehicle Quote](https://quoting.cartransportwithpersonalitems.com.au/quote/vehicle)\n- [Contact](https://quoting.cartransportwithpersonalitems.com.au/contact)\n- [Quote Capability Manifest](https://quoting.cartransportwithpersonalitems.com.au/quote-capability.json)\n- [Quote Host AI Catalog](https://quoting.cartransportwithpersonalitems.com.au/.well-known/ai-catalog.json)\n- [Human Guide For Agents](https://quoting.cartransportwithpersonalitems.com.au/agents)\n- [Household Quote Public Agent API](https://quoting.cartransportwithpersonalitems.com.au/api/v1/household-quotes/assistant/submit)\n\n## Agent Notes\n\nUse the public website for crawlable content and legal information. Use the site-owned quote subdomain for household quote, vehicle quote, contact, quote capability, and public household agent API handoff.\n";

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
