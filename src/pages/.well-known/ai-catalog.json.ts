import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const catalog = {
    specVersion: '1.0',
    host: {
      displayName: "Cartransportwithpersonalitems",
      identifier: "did:web:cartransportwithpersonalitems.com.au",
      url: "https://cartransportwithpersonalitems.com.au/",
    },
    entries: [
      {
            "identifier": "urn:ai:cartransportwithpersonalitems.com.au:web:home",
            "displayName": "Cartransportwithpersonalitems Website",
            "type": "text/html",
            "url": "https://cartransportwithpersonalitems.com.au/"
      },
      {
            "identifier": "urn:ai:cartransportwithpersonalitems.com.au:okf:index",
            "displayName": "Cartransportwithpersonalitems Open Knowledge Index",
            "type": "text/markdown",
            "url": "https://cartransportwithpersonalitems.com.au/okf/index.md"
      },
      {
            "identifier": "urn:ai:cartransportwithpersonalitems.com.au:action:1",
            "displayName": "Cartransportwithpersonalitems Action 1",
            "type": "application/javascript",
            "url": "https://quotes.moveroo.com.au/embed/vehicle-assistant/v1/loader.js"
      }
],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
