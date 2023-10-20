import type { KirbyQuerySchema } from 'kirby-fest'

export function getProjectsQuery(pageId: string): KirbyQuerySchema {
  return {
    query: `page('projects')`,
    select: {
      id: true,
      title: true,
      text: 'page.text.kirbytext',
      children: {
        query: `page.children.listed`,
        select: {
          id: true,
          title: true,
        }
      }
    },
  }
}
