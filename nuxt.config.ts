// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'DM Sans': true
        }
      }
    ]
  ],
  devtools: { enabled: true }
})
