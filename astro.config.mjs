// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), clerk()],
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
