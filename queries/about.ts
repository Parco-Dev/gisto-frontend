import type { KirbyQuerySchema } from 'kirby-fest'

export const aboutQuery: KirbyQuerySchema = {
  query: 'page("about")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    about_text: 'page.about_text.kirbytext',
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
    text: 'page.text.kirbytext',
    collaborations: 'page.collaborations.kirbytext',
    press: 'page.press.kirbytext',
    news: {
      query: 'page.news.toStructure',
      select: {
        id: true,
        title: 'structureItem.title.kirbytextinline',
        text: 'structureItem.title.kirbytextinline',
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
        }
      }
    } 
  }
}