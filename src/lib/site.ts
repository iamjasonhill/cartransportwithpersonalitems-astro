export interface SiteLink {
  href: string;
  label: string;
}

export const navigation: SiteLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
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
];

export const site = {
  name: 'Car Transport With Personal Items',
  domain: 'cartransportwithpersonalitems.com.au',
  url: 'https://cartransportwithpersonalitems.com.au',
  locale: 'en-AU',
  organizationName: 'Moveroo Cars',
  contactEmail: 'info@cartransportwithpersonalitems.com.au',
  defaultTitle: 'Car Transport With Personal Items',
  defaultDescription:
    'Book vehicle transport with approved personal items left inside, with clearer route checks, declared-item approval, and practical booking guidance.',
  seoAssets: {
    ogImage: '/social-card.jpg',
    twitterImage: '/social-card.jpg',
    favicon: '/favicon.png',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  navigation,
  trustLinks,
};
