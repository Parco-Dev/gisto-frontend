import type { KirbyQuerySchema } from 'kirby-fest'

export function getProjectsQuery(): KirbyQuerySchema {
  return {
    query: `page('work')`,
    select: {
      url: true,
      id: true,
      title: true,
      // text: 'page.text.kirbytext',
      children: {
        query: `page.children.listed`,
        select: {
          id: true,
          title: true,
          url: 'page.slug',
          year: true,
          place: true,
          client: true,
          category: true,
          type_of_work: true,
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
    },
  }
}
