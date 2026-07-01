import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const payload = {
  "specVersion": "1.0",
  "host": {
    "displayName": "Cartransportwithpersonalitems",
    "identifier": "did:web:cartransportwithpersonalitems.com.au",
    "url": "https://cartransportwithpersonalitems.com.au/"
  },
  "canonicalQuoteHost": "https://quoting.cartransportwithpersonalitems.com.au",
  "entries": [
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:web:home",
      "displayName": "Cartransportwithpersonalitems Website",
      "type": "text/html",
      "url": "https://cartransportwithpersonalitems.com.au/"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:llms",
      "displayName": "Cartransportwithpersonalitems LLM guidance",
      "type": "text/plain",
      "url": "https://cartransportwithpersonalitems.com.au/llms.txt"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:markdown:index",
      "displayName": "Cartransportwithpersonalitems Markdown summary",
      "type": "text/markdown",
      "url": "https://cartransportwithpersonalitems.com.au/index.md"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:agent-skills:index",
      "displayName": "Cartransportwithpersonalitems Agent Skills Index",
      "type": "application/json",
      "url": "https://cartransportwithpersonalitems.com.au/.well-known/agent-skills/index.json"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:agents:guide",
      "displayName": "Cartransportwithpersonalitems Agent/API Guide",
      "type": "text/html",
      "url": "https://cartransportwithpersonalitems.com.au/agents/"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:household",
      "displayName": "Household Quote",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/quote/household"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:vehicle",
      "displayName": "Vehicle Quote",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/quote/vehicle"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:contact",
      "displayName": "Contact",
      "type": "text/html",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/contact"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:capability",
      "displayName": "Quote Capability Manifest",
      "type": "application/json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/quote-capability.json"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:openapi",
      "displayName": "Quote OpenAPI Schema",
      "type": "application/vnd.oai.openapi+json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/openapi.json"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:household-public-agent-api",
      "displayName": "Household Quote Public Agent API",
      "type": "application/json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/api/v1/household-quotes/assistant/submit"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:vehicle-public-agent-api",
      "displayName": "Vehicle Quote Public Agent API",
      "type": "application/json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/api/v1/vehicle-quotes/assistant/submit"
    },
    {
      "identifier": "urn:ai:cartransportwithpersonalitems.com.au:quote:callback-public-agent-api",
      "displayName": "Callback Public Agent API",
      "type": "application/json",
      "url": "https://quoting.cartransportwithpersonalitems.com.au/api/v1/callbacks/assistant/request"
    }
  ]
};

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
