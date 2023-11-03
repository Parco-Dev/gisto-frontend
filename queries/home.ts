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
    featuredProjects: {
      query: 'page("work").children',
      select: {
        id: true,
        url: 'page.slug',
        title: true,
        excerpt: 'page.excerpt.kirbytext',
        main_image: {
          query: "page.main_image.toFiles",
          select: {
            url: true,
            niceSize: true,
            alt: "file.alt.kirbytext"
          }
        },
      },
    },
  }
}