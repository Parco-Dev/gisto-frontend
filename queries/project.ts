import type { KirbyQuerySchema } from 'kirby-fest'

export function getProjectQuery(pageId: string): KirbyQuerySchema {
  return {
    query: `page("${pageId}")`,
    select: {
      url: true,
      id: true,
      title: true,
      text: 'page.text.kirbytext',
      excerpt: 'page.excerpt.kirbytext',
      subtitle: 'page.subtitle.kirbytext',
      year: 'page.year.kirbytext',
      place: 'page.place.kirbytext',
      client: 'page.client.kirbytext',
      main_image: {
        query: "page.image",
        select: {
          url: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
      category: {
        query: 'page.category.split',
        select: {
          name: true,
          id: true
        }
      },
      type_of_work: 'page.type_of_work.split',
      content: 'page.contentblocks.toBlocks',
      /*
      content: {
        query: 'page.contentblocks.toBlocks',
        select: {
          content: {
            query: 'content',
            select: {
              caption: true,
              images: true
            }
          }
        }
      },
      */
      credits: {
        query: 'page.credits.toStructure',
        select: {
          id: true,
          credits_title: true,
          credits_content: true,
        }
      },
      photo_dump: {
        query: "page.photo_dump.toFiles",
        select: {
          url: true,
          name: true,
          extension: true,
          type: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
      drawings_diagrams: {
        query: "page.drawings_diagrams.toFiles",
        select: {
          url: true,
          name: true,
          extension: true,
          type: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
      models: {
        query: "page.models.toFiles",
        select: {
          url: true,
          name: true,
          extension: true,
          type: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
      video: {
        query: "page.video.toFiles",
        select: {
          url: true,
          name: true,
          extension: true,
          type: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
      graphics: {
        query: "page.graphics.toFiles",
        select: {
          url: true,
          name: true,
          extension: true,
          type: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
    },
  }
}
