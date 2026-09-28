# Repository Guidance

This history is the shared Geek Blog content source for two independent deployments:
`vovka/my-geek-blog` serves production and `vovka/my-geek-blog-test` serves testing.

- Depend only on `file:.yalc/blog-engine` at runtime.
- Pin the exact canonical `geek-blog/blog-engine` SHA in `geek-blog.lock.json`.
- Never depend on `vovka/blog-engine`; it is fallback-only.
- Keep `package-lock.json` tracked and `.yalc/`, `yalc.lock`, and `.geek-blog/` ignored.
- Use the same `npm run build` path locally and in Actions.
- Read the site URL, profile, robots policy, and analytics identifiers from the GitHub Pages environment.
- Keep production analytics and indexable resources isolated from test analytics and noindex resources.
- Keep Giscus repository/category IDs stable when changing the repository path.
- Keep Giscus canonical backlinks on `https://blog.shcherbyna.me` in both deployments.
- Use the private enhancer only through `npm run enhance` and `GEEK_BLOG_TOKEN`.

## Sharing Posts (distribution)

Every post must be shared with a tagged URL so the source is attributed in GA4 and Clarity.
Bare links from LinkedIn, Telegram or chat apps arrive with no referrer and show up as direct traffic.

- Format: `https://blog.shcherbyna.me/<slug>?utm_source=<platform>&utm_medium=social&utm_campaign=<slug>`
- Platforms: `linkedin`, `devto`, `hackernews`, `telegram`, `twitter`, `upwork`.
- When generating or finishing a post, output the ready-to-paste share URL for each platform
  the author asked for (default: `linkedin`).
- Never put UTM parameters in the post's canonical URL, sitemap, internal links, or Giscus backlink.
- Every post needs a non-empty `excerpt`; it becomes the `<meta name="description">` of the static page.
