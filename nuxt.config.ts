// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    provider: 'local',
  },
  icon: {
    customCollections: [
      {
        prefix: 'philot-icon',
        dir: './app/assets/philot-icons',
      },
    ],
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@atoms-studio/nuxt-swiftsearch',
    '@nuxtjs/seo',
    '@nuxtjs/sanity',
    '@morev/vue-transitions',
    '@nuxtjs/eslint-module',
    '@nuxt/a11y',
  ],
})
