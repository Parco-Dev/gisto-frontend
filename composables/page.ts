import { joinURL } from 'ufo'

/**
 * Returns the currently active page, similar to Kirby's `$page` global variable
 */
export function usePage<T extends Record<string, any> = Record<string, any>>() {
  return useState<T>('app.page', () => ({} as T))
}

/**
 * Sets the currently active page and updates the document head
 */
export function setPage<T extends Record<string, any>>(page?: T) {
  const pageState = usePageState()

  if (!page) {
    pageState.value = 'rejected'
    return
  }

  usePage().value = page

  // Build the page meta tags
  const { siteUrl } = useRuntimeConfig().public
  const site = useSite()
  const title = page.title
    ? `${page.title} – ${site.value.title}`
    : site.value.title
  const description = page.excerpt || site.value.short_bio
  const url = joinURL(siteUrl, useRoute().path)
  const image = page.main_image?.url || page.about_image?.url || page.home_icon?.url

  useHead({
    bodyAttrs: {
      'class': page.intendedTemplate || 'default',
      'data-template': page.intendedTemplate || 'default',
    },
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description.replace('<p>', '').replace('</p>', ''),
    ogUrl: url,
    ogType: 'website',
    ogImage: image,
    twitterTitle: title,
    twitterDescription: description.replace('<p>', '').replace('</p>', ''),
    twitterCard: 'summary',
    twitterImage: image
  })

  pageState.value = 'resolved'
}

/**
 * Returns a promise that resolves when the page data has been loaded or rejected
 */
export async function hasPage() {
  const state = usePageState()

  await until(state).not.toBe('pending')
  await nextTick()

  return state.value === 'resolved'
}

function usePageState() {
  return useState<'pending' | 'resolved' | 'rejected'>(
    'app.state.page',
    () => 'pending'
  )
}

export function useProject () {
  return useState('app.project', () => {})
}

export function setProject (page?: any) {
  useProject().value = page;
}