import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.petteri.vaara.la",
  outDir: "public",
  publicDir: "static",
  integrations: [mdx(), sitemap(), tailwind()],
});
