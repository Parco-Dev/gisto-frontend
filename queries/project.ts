import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image';

export function getProjectQuery(pageId: string): KirbyQuerySchema {
  return {
    query: `page("${pageId}")`,
    select: {
      url: true,
      id: true,
      title: true,
      text: 'page.text.kirbytext',
      excerpt: true,
      subtitle: 'page.subtitle.kirbytext',
      year: true,
      place: true,
      client: true,
      next: {
        query: 'page.next',
        select: [ 'title', 'slug' ],
      },
      prev: {
        query: 'page.prev',
        select: [ 'title', 'slug' ],
      },
      main_image: {
        query: "page.image",
        select: imageQuery,
      },
      category: 'page.category.split',
      type_of_work: 'page.type_of_work.split',

      content: {
        query: 'page.contentblocks.toBlocks',
        select: {
          image: {
            query: 'block.content.images.toFiles.first',
            select: imageQuery,
          },
          image1:{
            query:  'block.content.image1.toFiles.first',
            select: imageQuery,
          },
          image2:{
            query:  'block.content.image2.toFiles.first',
            select: imageQuery,
          },
          caption: 'block.content.caption',
          caption1: 'block.content.caption1',
          caption2: 'block.content.caption2',
          paragraph: 'block.content.paragraph',
          id: true,
          type: true,
        },
      },

      content_blocks: 'page.contentblocks.toBlocks',
      credits: {
        query: 'page.credits.toStructure',
        select: [ 'id', 'credits_title', 'credits_content' ],
      },
      photo_dump: {
        query: "page.photo_dump.toFiles",
        select: imageQuery,
      },
      drawings_diagrams: {
        query: "page.drawings_diagrams.toFiles",
        select: imageQuery,
      },
      models: {
        query: "page.models.toFiles",
        select: imageQuery,
      },
      video: {
        query: 'page.video.toStructure',
        select: {
          id: true,
          media: {
            query: 'structureItem.media.toFiles',
            select: [ 'title', 'url', 'name', 'extension', 'type' ],
          },
          embeds: true,
          title: true
        }
      },
      graphics: {
        query: 'page.graphics.toFiles',
        select: imageQuery,
      },
      links: {
        query: 'page.links.toStructure',
        select: [ 'url', 'name' ],
      },
    },
  }
}

export function getProjectNavigationQuery(projectId: string): KirbyQuerySchema {
  return {
    query: `page("work/${projectId}").siblings(true).visible()`,
    select: {
      id: true,
      title: true,
      url: 'page.slug',
    },
  };
}