# Roza website

The site for [rozacyclesync.com](https://rozacyclesync.com): one screen showing Roza's Home in an
iPhone frame, a link to the App Store, and the Privacy Policy and Terms of Service.

Plain HTML and CSS — no framework, no build step. Hosted on Cloudflare Pages, which deploys every
push to `main`.

## Layout

```
index.html            Home: headline + iPhone showing the app's Home screen
privacy/index.html    Privacy Policy  → /privacy/
terms/index.html      Terms of Service → /terms/
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

- **Legal text** — when the policy or terms change, update the “Last updated” date too. The App
  Store listing links to `https://rozacyclesync.com/privacy/`.

## Deploy

Cloudflare Pages project connected to this repository:

- Production branch: `main`
- Build command: none
- Build output directory: `/`

Pull requests get their own preview URL.
