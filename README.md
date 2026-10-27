# Roza website

The site for [rozacyclesync.com](https://rozacyclesync.com): one screen showing Roza's Home in an
iPhone frame, a link to the App Store, and the Privacy Policy and Terms of Service.

Plain HTML and CSS — no framework, no build step. Hosted on GitHub Pages, which publishes every
push to `main`.

## Layout

```
index.html            Home: headline + iPhone showing the app's Home screen
privacy/index.html    Privacy Policy  → /privacy/
terms/index.html      Terms of Service → /terms/
support/index.html    Support (App Store "Support URL") → /support/, unlisted
marketing/index.html  Marketing (App Store "Marketing URL") → /marketing/, unlisted
404.html              Not-found page
assets/style.css      Styles — colours mirror the app's DesignSystem "Mesh Noir" palette
assets/main.js        Header glass on scroll
assets/home.jpg       Simulator capture of Home (iPhone 17 Pro, 720px wide)
```

## Run locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Common changes

- **App Store link** — `https://apps.apple.com/app/id6754796676`, in the header of every page.
- **Contact email** — the `mailto:` links in every page's header and footer, plus section 9 of the
  Privacy Policy and section 12 of the Terms.
- **Home screenshot** — capture Home in the simulator with a clean status bar, then replace
  `assets/home.jpg` at 720px wide:

  ```bash
  xcrun simctl status_bar booted override --time "9:41" --batteryState discharging --batteryLevel 100
  xcrun simctl io booted screenshot home.png
  sips --resampleWidth 720 -s format jpeg -s formatOptions 85 home.png --out assets/home.jpg
  ```

- **Support and Marketing pages** — linked only from the App Store listing: nothing on the site links
  to them, they are left out of `sitemap.xml`, and `noindex` keeps them out of search results.
- **Legal text** — when the policy or terms change, update the “Last updated” date too. The App
  Store listing links to `https://rozacyclesync.com/privacy/`.

## Deploy

GitHub Pages, publishing the root of `main` (Settings → Pages). Every push to `main` goes live in
a minute or two.

- `CNAME` holds the custom domain, `rozacyclesync.com`; GitHub redirects `www.` to it.
- `.nojekyll` tells Pages to serve the files as they are, without running Jekyll.

The domain is registered with GoDaddy, whose DNS points at GitHub:

| Type  | Name  | Value                                    |
|-------|-------|------------------------------------------|
| A     | `@`   | 185.199.108.153                          |
| A     | `@`   | 185.199.109.153                          |
| A     | `@`   | 185.199.110.153                          |
| A     | `@`   | 185.199.111.153                          |
| CNAME | `www` | theeeebz.github.io                       |
