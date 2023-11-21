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
        select: {
          url: true,
          niceSize: true,
          alt: "file.alt.kirbytext"
        }
      },
      category: 'page.category.split',
      type_of_work: 'page.type_of_work.split',
      content: 'page.contentblocks.toBlocks',
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
        query: 'page.video.toStructure',
        select: {
          id: true,
          media: "structureItem.media.toFiles",
          embeds: true,
          title: true
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