import { siteQuery } from './queries'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt-kql', '@nuxtjs/google-fonts', '@nuxtjs/device', 'nuxt-gtag'],

  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    }
  },

  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/assets/scss/main.scss',
  ],

  googleFonts: {
    families: {
      'IBM+Plex+Mono': [400, 700],
    }
  },

  gtag: {
    id: process.env.GTAG,
  },

  runtimeConfig: {
    public: {
      siteUrl: '',
    },
    app: {
      KIRBY_BASE_URL: process.env.KIRBY_BASE_URL,
      KIRBY_API_TOKEN: process.env.KIRBY_API_TOKEN,
      KIRBY_API_USERNAME: process.env.KIRBY_API_USERNAME,
      KIRBY_API_PASSWORD: process.env.KIRBY_API_PASSWORD,
    },
  },

  // DISABLED: KQL PREFETCH
  kql: {
    auth: "none",
    prefetch: {
      // Currently only used to infer the type of the `site` query
      kirbySite: siteQuery,
    },
    // Optionally, cache the queries on the server for half an hour
    server: {
      cache: true,
      maxAge: 60 * 30,
    },
  },

  // ENABLED: PRERENDER INDEX PAGE

  nitro: {
    routeRules: {
      '/': { ssr: true },  // Ensure the home page is dynamically SSR'd
    }
  },

  /* nitro: {
    prerender: {
      // Prerender the index page
      routes: ['/'],
    },
  }, */

  // DISABLED: TYPESCRIPT CHECK AND COMPILE ACTIONS
  // typescript: {
  //   // Recommended: type check in dev and on build
  //   typeCheck: true,
  //   shim: false,
  //   tsConfig: {
  //     compilerOptions: {
  //       moduleResolution: 'bundler',
  //     },
  //   },
  // },

  // ENABLED: AUTO IMPORT SASS VARIABLES
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_1-variables.scss" as *;',
        },
      },
    },
  },

  // ENABLED: SERVER SIDE RENDERING
  ssr: true,

  // ENABLED: SKIP DEFAULT NUXT LOADING PAGE
  spaLoadingTemplate: 'loading.html',
})
