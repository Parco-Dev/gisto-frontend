import type { KirbyQuerySchema } from 'kirby-fest'

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
      select: {
        url: true,
        name: true
      }
    },
    jobs: 'page.jobs.kirbytext',
    about_image: {
      query: "page.aboutimage.toFiles",
      select: {
        url: true,
        niceSize: true,
        alt: "file.alt.kirbytext"
      }
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
          query: "structureItem.news_image.toFiles",
          select: {
            url: true,
            niceSize: true,
            alt: "file.alt.kirbytext"
          }
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
              select: {
                url: true,
                niceSize: true,
                alt: "file.alt.kirbytext"
              }
            }
          }
        }
      }
    } 
  }
}