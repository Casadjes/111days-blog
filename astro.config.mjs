// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { esES } from "@clerk/localizations";

export default defineConfig({
  integrations: [
    tailwind(),
    clerk({
      localization: esES,
    }),
  ],

  adapter: vercel(),
  output: "server",

  markdown: {
    shikiConfig: {
      theme: "dracula-soft",
      langs: [],
      wrap: false,
    },
  },
});
