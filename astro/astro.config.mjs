// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  integrations: [tailwind()]
})
