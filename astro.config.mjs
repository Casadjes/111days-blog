// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),

  markdown: {
    shikiConfig: {
      theme: "dracula-soft",
      langs: [],
      wrap: false,
    },
  },
});
