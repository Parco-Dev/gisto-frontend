import type { KirbyQuerySchema } from 'kirby-fest'

export const homeQuery: KirbyQuerySchema = {
  query: 'page("home")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    home_icon: {
      query: "page.home_icon.toFiles",
      select: {
        url: true,
        niceSize: true,
        alt: "file.alt.kirbytext"
      }
    },
    featured: {
      query: 'page.featured.toStructure',
      select: {
        columns: true,
        project: {
          query: 'structureItem.project.toPages',
          select: {
            id: true,
            url: 'page.slug',
            title: true,
            excerpt: 'page.excerpt',
            main_image: {
              query: "page.main_image.toFiles",
              select: {
                url: true,
                niceSize: true,
                alt: "file.alt.kirbytext"
              }
            },
          }
        }
      }
    }
  }
}