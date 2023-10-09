// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title: 'Next app Example',
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    myTest: process.env.NUXT_API_SECRET,
    public: {
      TESTVAR: process.env.NUXT_API_SECRET,
    },
  },
})
