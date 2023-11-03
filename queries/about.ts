import type { KirbyQuerySchema } from 'kirby-fest'

export const aboutQuery: KirbyQuerySchema = {
  query: 'page("about")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    about_text: 'page.about_text.kirbytext',
    email: 'page.email.kirbytext',
    social: {
      query: 'page.social.toStructure',
      select: {
        url: true,
        name: true
      }
    },
    jobs: 'page.jobs.kirbytext',
    /*
    about_image: {
      query: "page.image.toFiles",
      select: {
        url: true,
        niceSize: true,
        alt: "file.alt.kirbytext"
      }
    },
    */
    text: 'page.text.kirbytext',
    collaborations: 'page.collaborations.kirbytext',
    press: 'page.press.kirbytext',
    /* news: {
      query: 'page.news.toStructure',
      select: {
       title: 'page.news.title.kirbytext',
      }
    } */
  }
}