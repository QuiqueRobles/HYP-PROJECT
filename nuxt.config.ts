// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Women Support Center',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Support center for women in difficulty' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    }
  },
  css: ['@/assets/styles/main.css'],
  modules: ['@pinia/nuxt', 'vuetify-nuxt-module', 'usebootstrap', '@vesp/nuxt-fontawesome'],
  components: true,
  pinia: {
    storesDirs: [
        './stores/**'
    ]
  },
  router: {
    base: '/HYP-PROJECT/'
  }
})