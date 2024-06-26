// https://nuxt.com/docs/api/configuration/nuxt-config

import dotenv from 'dotenv'
dotenv.config()

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
      { rel: 'icon', type: 'image/png', href: 'assets/logo.png' }
    ]
    },
    baseURL: '/HYP-PROJECT/' 
  },
  css: ['@/assets/styles/main.css'],
  modules: ['@pinia/nuxt', 'vuetify-nuxt-module', 'usebootstrap', '@vesp/nuxt-fontawesome'],
  components: true,
  pinia: {
    storesDirs: [
        './stores/**'
    ]
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/', // Agrega las rutas que deban ser prerenderizadas
        '/HYP-PROJECT/project1',
        '/HYP-PROJECT/project2',
        '/HYP-PROJECT/project3',
        '/HYP-PROJECT/project4',
        '/HYP-PROJECT/project5' // Ejemplo de ruta dinámica, ajusta según tus necesidades
        // Agrega aquí otras rutas dinámicas necesarias
      ]
    }
  }
  ,runtimeConfig: {
    public: {
      openaiApiKey: process.env.NUXT_PUBLIC_OPENAI_API_KEY
    }
  }
})