import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.rishabhsharma.co",
  trailingSlash: "never",
  devToolbar: { enabled: false },
  build: { format: "file" },
  integrations: [sitemap({ filter: (p) => !p.includes("/404") })],
});
