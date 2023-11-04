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
      category: 'page.category.split',
      type_of_work: 'page.type_of_work.split',
      /* contentblocks: {
        query: 'page.content.blocks',
        select: {
          text_block: {
            text: 'text_block.text.kirbytext',
          },
          fullwidth_images: {
            images: 'fullwidth_images.images.files.url',
            caption: 'fullwidth_images.caption.kirbytext',
          },
          double_images: {
            image1: 'double_images.image1.files.url',
            caption1: 'double_images.caption1.kirbytext',
            image2: 'double_images.image2.files.url',
            caption2: 'double_images.caption2.kirbytext',
          }, 
        },
      }, */
      // type_of_work: 'page.type_of_work',
      
      content: 'page.contentblocks.toBlocks',

      /*
      contentblocks: {
        query: 'page.content.toBlocks',
        select: {
          text_block: {
            query: 'blockItem',
            select: {
              text: 'blockItem.text.kirbytext',
            }
          },
        },
      },
      */

      // blocksJson: 'page.content.toBlocks',
      // blocksHtml: 'page.content.toBlocks.toHtml',
      /* credits: {
        query: 'page.credits.toStructure',
        select: {
          credits_title: 'credits.credits_title',
          credits_content: 'credits.credits_content.kirbytext',
        },
      }, */
      credits: {
        query: 'page.credits.toStructure',
        select: {
          id: true,
          credits_title: true,
          credits_content: true,
        }
      },
      // photo_dump: 'page.photo_dump',
      photo_dump: {
        query: "page.photo_dump.toFiles",
        select: {
          url: true,
          name: true,
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
          type: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
    },
  }
}
