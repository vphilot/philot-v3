// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@atoms-studio/nuxt-swiftsearch',
    '@hypernym/nuxt-anime',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/sanity',
    '@morev/vue-transitions',
    '@nuxtjs/eslint-module',
    '@nuxt/a11y',
    '@nuxtjs/ngrok'
  ]
})