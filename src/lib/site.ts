export interface SiteLink {
  href: string;
  label: string;
}

export const canonicalVehicleQuoteUrl = 'https://quoting.cartransportwithpersonalitems.com.au/quote/vehicle';
export const canonicalContactUrl = 'https://quoting.cartransportwithpersonalitems.com.au/contact';

export const navigation: SiteLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: canonicalContactUrl, label: 'Contact' },
];

export const trustLinks: SiteLink[] = [
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms of Use' },
  { href: '/cookie-policy/', label: 'Cookie Policy' },
  { href: '/disclaimer/', label: 'Disclaimer' },
];

export const publicPages: SiteLink[] = [
  ...navigation,
  ...trustLinks,
  { href: '/sitemap/', label: 'HTML Sitemap' },
];

export const site = {
  name: 'Car Transport With Personal Items',
  domain: 'cartransportwithpersonalitems.com.au',
  url: 'https://cartransportwithpersonalitems.com.au',
  locale: 'en-AU',
  organizationName: 'Moveroo Cars',
  contactEmail: 'info@cartransportwithpersonalitems.com.au',
  defaultTitle: 'Car Transport With Personal Items in Australia',
  defaultDescription:
    'Get a quote to move your car with approved personal items left inside, with route checks, declared-item approval, and clear booking guidance Australia-wide.',
  seoAssets: {
    ogImage: '/social-card.jpg',
    twitterImage: '/social-card.jpg',
    favicon: '/favicon.png',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  navigation,
  trustLinks,
  canonicalVehicleQuoteUrl,
  canonicalContactUrl,
  destinations: {
    quote: canonicalVehicleQuoteUrl,
    contact: canonicalContactUrl,
  },
  analytics: {
    siteKey: 'cartransportwithpersonalitems',
    trackedLinks: [
      { href: canonicalVehicleQuoteUrl, eventName: 'quote_vehicle_click' },
    ] as Array<{ href: string; eventName: string }>,
  },
};
