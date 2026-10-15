# rishabhsharma.co

Personal site of Rishabh Sharma — AI research engineer, founder of archimedes.run.

Astro (static HTML for every word, so it's crawlable) + a React Three Fiber particle island that morphs
between six shapes as you scroll + GSAP/Lenis motion.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

- Content: `src/data/site.ts` (projects, timeline, stats, socials — edit here, everything else reads from it)
- 3D: `src/components/Scene.tsx` (GPU morph shader; shapes: orb, knot, galaxy, sky, field, RS)
- Motion: `src/scripts/motion.ts` (scroll scenes, cursor, magnetic buttons, terminal — press `/`)
- SEO: JSON-LD in `src/layouts/Base.astro`, `/llms.txt`, sitemap, per-project pages under `/work/*`
- The previous Create React App site lives in `legacy-cra/`.
