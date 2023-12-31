import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const homeQuery: KirbyQuerySchema = {
  query: 'page("home")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    home_icon: {
      query: "page.home_icon.toFiles.first",
      select: [ 'url', 'alt' ],
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
            excerpt: true,
            load_image: {
              query: "page.main_image.toFiles.first.resize(30)",
              select: [ 'url' ],
            },
            main_image: {
              query: "page.main_image.toFiles.first",
              select: imageQuery,
            },
          }
        }
      }
    }
  }
}