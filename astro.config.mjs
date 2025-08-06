import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import github from "@astrojs/github"; // ✅ New line
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://Ahmed-Subhan-insights.github.io", // ✅ Set your GitHub Pages URL directly here
  base: "/", // ✅ Add this line to make routing work on GitHub Pages
  integrations: [
    tailwind(),
    github(), // ✅ New line added
    robotsTxt({
      sitemap: `https://Ahmed-Subhan-insights.github.io/sitemap.xml`, // ✅ Replace SITE_URL
    }),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});

