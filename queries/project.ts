import type { KirbyQuerySchema } from 'kirby-fest'

export function getProjectQuery(pageId: string): KirbyQuerySchema {
  return {
    query: `page("${pageId}")`,
    select: {
      id: true,
      title: true,
      text: 'page.text.kirbytext',
      children: {
        query: `page.children.listed`,
        select: {
          id: true,
          title: true,
          children: {
            query: `page.files`,
            select: {
              id: true,
              title: true,
              url: true,
            }
          }
        }
      }
    },
  }
}
