// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [400, 500, 600],
        'Noto+Serif': [400, 500, 600]
      },
    }]
  ],
  quasar: {
    extras: {
      fontIcons: [
        'material-icons',
        'material-icons-round',
        'material-symbols-outlined',
        'material-symbols-rounded',
        'material-symbols-sharp'
      ]
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})

