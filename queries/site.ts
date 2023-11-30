import type { KirbyQuerySchema } from 'kirby-fest';

export const siteQuery: KirbyQuerySchema = {
  query: 'site',
  select: {
    title: true,
    description: true,
    long_bio: 'site.long_bio.kirbytext',
    short_bio: 'site.short_bio.kirbytext',
    studio_address: 'site.studio_address.kirbytext',
    workshop_address: 'site.workshop_address.kirbytext',
    social: 'site.social.kirbytext',
    legal: 'site.legal.kirbytext',
    pages: {
      query: 'site.children.listed',
      select: [ 'title', 'url' ],
    },
    projects: {
      query: 'page("work").children.listed',
      select: {
        category: 'page.category.split',
        type_of_work: 'page.type_of_work.split',
      },
    },
  },
};
