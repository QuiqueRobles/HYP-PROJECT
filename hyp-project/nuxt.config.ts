export default {
  // Configuración básica de Nuxt.js
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.css'
  ],
  target: 'static', // o 'server' si estás usando SSR
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
  },
  plugins: ['~/plugins/bootstrap-vue.js'],
  components: true,
  buildModules: [],
  modules: [],
  build: {}
}
