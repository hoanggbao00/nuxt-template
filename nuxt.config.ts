import tailwindcss from '@tailwindcss/vite'
import { APP_CONFIG } from './lib/config'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/icon', 'shadcn-nuxt', 'nitro-cloudflare-dev'],
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: `%s | ${APP_CONFIG.AppName}`,
      meta: [
        {
          name: 'description',
          content: APP_CONFIG.AppDescription,
        },
      ],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
