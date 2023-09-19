// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  integrations: [tailwind()],
  // Uncomment these lines for deploy to Github.
  // Commented since base link should be http://localhost:4321

  // site: 'https://kolya-movchan.github.io',
  // base: '/strapi-astro-setup'
})
