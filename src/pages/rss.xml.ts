import rss from '@astrojs/rss';
import { site } from '../lib/site';

const items = [
  {
    title: site.defaultTitle,
    description: site.defaultDescription,
    link: '/',
  },
  {
    title: 'Services',
    description: 'Overview of approved-item vehicle transport, routing guidance, and quoting expectations.',
    link: '/services/',
  },
  {
    title: 'About',
    description: 'How Car Transport With Personal Items handles declared goods, route checks, and planning.',
    link: '/about/',
  },
];

export function GET(context: { site?: string | URL }) {
  return rss({
    title: `${site.name} Updates`,
    description: `${site.name} service guidance, approved-item transport help, and planning references.`,
    site: context.site ?? site.url,
    items,
  });
}
