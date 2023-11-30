import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const aboutQuery: KirbyQuerySchema = {
  query: 'page("about")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    about_text: true,
    email: 'page.email',
    social: {
      query: 'page.social.toStructure',
      select: [ 'url', 'name' ],
    },
    jobs: 'page.jobs.kirbytext',
    about_image: {
      query: "page.aboutimage.toFiles.first",
      select: imageQuery,
    },
    text: true,
    collaborations: 'page.collaborations.kirbytext',
    press: 'page.press.kirbytext',
    news: {
      query: 'page.news.toStructure',
      select: {
        id: true,
        title: true,
        text: true,
        columns: true,
        news_image: {
          query: "structureItem.news_image.toFiles.first",
          select: [ 'url', 'alt' ],
        },
        links: {
          query: 'structureItem.links.toStructure',
          select: {
            id: true,
            link_text: 'structureItem.link_text.kirbytext',
          }
        },
        downloads: {
          query: 'structureItem.downloads.toStructure',
          select: {
            id: true,
            name_download: 'structureItem.name_download.kirbytext',
            link_download: {
              query: 'structureItem.link_download.toFiles',
              select: [ 'url', 'alt' ],
            }
          }
        }
      }
    } 
  }
}