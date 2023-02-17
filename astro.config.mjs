import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    extendDefaultPlugins: true,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      warp: true
    }
  },
  integrations: [mdx({
    extendMarkdownConfig: true
  }), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react()]
});