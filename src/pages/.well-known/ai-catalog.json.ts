import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const catalog = {
  "specVersion": "1.0",
  "host": {
    "displayName": "Car Transport With Personal Items",
    "identifier": "did:web:cartransportwithpersonalitems.com.au",
    "url": "https://cartransportwithpersonalitems.com.au/"
  },
  "entries": [
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:web:home",
      "displayName": "Car Transport With Personal Items Website",
      "type": "text/html",
      "url": "https://cartransportwithpersonalitems.com.au/"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:okf:index",
      "displayName": "Car Transport With Personal Items Open Knowledge Index",
      "type": "text/markdown",
      "url": "https://cartransportwithpersonalitems.com.au/okf/index.md"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:household",
      "displayName": "Car Transport With Personal Items Household Quote",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/quote/household"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:vehicle",
      "displayName": "Car Transport With Personal Items Vehicle Quote",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/quote/vehicle"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:contact",
      "displayName": "Car Transport With Personal Items Contact",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/contact"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:capability",
      "displayName": "Car Transport With Personal Items Quote Capability Manifest",
      "type": "application/json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/quote-capability.json"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:ai-catalog",
      "displayName": "Car Transport With Personal Items Quote Host AI Catalog",
      "type": "application/json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/.well-known/ai-catalog.json"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:human-guide",
      "displayName": "Car Transport With Personal Items Human Guide For Agents",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/agents"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:household-api",
      "displayName": "Car Transport With Personal Items Household Quote Public Agent API",
      "type": "application/json",
      "method": "POST",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/api/v1/household-quotes/assistant/submit"
    }
  ]
};

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
