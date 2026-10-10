# Aaroh — Together We Ascend

Aaroh is a community-focused web experience about bringing environmental health, educational resource sharing, and human progress together. Visitors can explore the project's story and impact pillars, submit a community request, and view a local demonstration board.

## Features

- Responsive home, story, impact pillars, community hub, and live board pages.
- Community request form with input validation and a browser-only arithmetic check.
- Request delivery to the Aaroh team through [Web3Forms](https://web3forms.com/).
- Local demonstration board powered by browser `localStorage`.
- Accessible navigation, reduced-motion support, and page-specific titles.

## Tech stack

- React 18 and React Router 6
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide icons

## Requirements

- Node.js 18 or later
- npm (included with Node.js)

## Run locally

1. Install dependencies:

   ```sh
   npm ci
   ```

2. Configure the request form by copying `.env.example` to `.env` and setting `VITE_WEB3FORMS_KEY` to your Web3Forms access key.

   PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

   macOS/Linux:

   ```sh
   cp .env.example .env
   ```

   The access key is included in the client-side app bundle; it is not a server-side secret. Use the controls available in your Web3Forms account and never put private credentials in frontend environment variables. The `.env` file is ignored by Git.

3. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed by Vite (usually <http://localhost:5173>).

## Build and preview

Create an optimized production build:

```sh
npm run build
```

Preview that build locally:

```sh
npm run preview
```

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/story` | Our Story |
| `/pillars` | Impact Pillars |
| `/platform` | Community Hub and request form |
| `/board` | Live Community Board |

The app uses client-side routing. Configure production hosting to serve `index.html` as a fallback for unknown paths so direct visits to these routes work.

## Request and data behavior

The form sends submitted request details to Web3Forms. If email delivery succeeds, the app also saves the request in this browser under the `aaroh.demo.requests.v1` `localStorage` key. The board reads only this browser's saved requests; it is not a shared feed, and data can be removed by clearing this browser's site storage. Email addresses are not displayed on the board.

The arithmetic check is a demo usability check, not a security measure. Aaroh is a frontend-only demo and does not include an application server or shared database.

## Images and branding

Update image sources in [`src/data/siteImages.js`](src/data/siteImages.js). Local images belong in `public/images/`; remote HTTPS image URLs are also supported. Images fall back to a gradient if loading fails. The page title, metadata, and favicon are configured in [`index.html`](index.html).
