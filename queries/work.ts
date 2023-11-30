import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export function getProjectsQuery(): KirbyQuerySchema {
  return {
    query: `page('work')`,
    select: {
      url: true,
      id: true,
      title: true,
      intendedTemplate: true,
      // text: 'page.text.kirbytext',
      children: {
        query: `page.children.listed`,
        select: {
          id: true,
          title: true,
          url: 'page.slug',
          ongoing: 'page.ongoing.value',
          year: true,
          place: true,
          client: true,
          category: true,
          type_of_work: true,
          main_image: {
            query: "page.main_image.toFiles.first",
            select: imageQuery,
          },
        }
      }
    },
  }
}
