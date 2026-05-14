// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['animejs'],
    },
  },
  ngrok: {
    authtoken: '1ZJYGDDtg97IuHIy0IIvTdo9vKp_WcuABrj3io4HdDE8NMTH',
  },
  fonts: {
    provider: 'google',
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
    '@nuxtjs/ngrok',
    '@atoms-studio/nuxt-swiftsearch',
    '@nuxtjs/seo',
    '@nuxtjs/sanity',
    '@morev/vue-transitions',
    '@nuxtjs/eslint-module',
    // '@nuxt/a11y',
  ],
})
