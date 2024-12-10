// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Танцы у метро Савеловская и Дмитровская",
      meta: [
        {  name: 'description', content: 'Арт-пространство Земля. Все виды танцевальных направлений и йоги' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://artzemlya.ru/logo.svg' },
      ]
    }
  },
  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
  ],
  ssr: true,
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    publicAssets: [
      {
        dir: 'assets',
        baseURL: '/assets'
      }
    ]
  }
})