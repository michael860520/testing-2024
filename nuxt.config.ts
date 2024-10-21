import { appDescription } from './app'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  colorMode: {
    classSuffix: '',
  },

  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json',
      },
    ],
    defaultLocale: 'zh-tw',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      redirectOn: 'root',
    },
  },

  routeRules: {
    '/': { redirect: '/test-template-2024-ssr' },
  },

  imports: {
    dirs: ['./app/utils', './app/composables'],
  },

  app: {
    cdnURL: 'https://testing-2024.vercel.app',
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    // prerender: {
    //   crawlLinks: false,
    //   routes: ['/'],
    //   ignore: ['/hi'],
    // },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-10-21',
})
