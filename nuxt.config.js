import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig ({
  head: {
    title: 'fabr-test',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/styles/style.scss',
  ],

  plugins: [
    {
      src: '@/plugins/v-click-outside',
      ssr: false,
    },
    '@/plugins/axios',
  ],

  components: true,

  modules: [
    '@nuxtjs/axios',
    'nuxt-svg-loader',
  ],

  axios: {
    baseURL: process.env.BASE_API_URL,
    proxyHeaders: false,
    credentials: false
  },
})
