// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      tenantId: process.env.TENANT_ID || 'your-tenant-id',
      handle: process.env.SOCIAL_MEDIA_HANDLE || '@yourTwitterHandle',
    },
  },
})
