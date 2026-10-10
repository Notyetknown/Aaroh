# Aaroh — Together We Ascend

Aaroh is a community-focused web app exploring how environmental health, educational resource sharing, and human progress can support one another. It provides a project story, impact pillars, a community request form, and a local demonstration board.

## Features

- Responsive pages for the home page, project story, impact pillars, community hub, and live board.
- Community request form with input validation and a simple browser-only arithmetic check.
- Request delivery to the Aaroh team through [Web3Forms](https://web3forms.com/).
- A live board backed by this browser's `localStorage`; requests are not shared with other visitors or devices.
- Accessible navigation, reduced-motion support, and page-specific titles.

## Tech stack

- React 18
- Vite 5
- React Router
- Tailwind CSS 3
- Framer Motion
- Lucide icons

## Getting started

Use Node.js 18 or later.

```sh
npm install
```

Create a local `.env` file by copying `.env.example` (in PowerShell, use `Copy-Item .env.example .env`; in macOS/Linux shells, use `cp .env.example .env`).
Set `VITE_WEB3FORMS_KEY` in `.env` to an access key for your Web3Forms account. The key is used by the browser, so it is public in a deployed frontend; configure appropriate controls in your Web3Forms account. Do not commit `.env`.

Start the development server:

```sh
npm run dev
```

Vite prints the local URL, typically <http://localhost:5173>.

Build and preview a production bundle:

```sh
npm run build
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

The app uses client-side routing. Configure production hosting to serve `index.html` for unknown paths (an SPA fallback), so direct visits to these routes work.

## Request and privacy behavior

The form sends request details to Web3Forms. After successful email delivery, it saves the request in the current browser under the `aaroh.demo.requests.v1` localStorage key. The board reads only that browser's saved requests; it is not a shared community feed and data can be cleared by clearing browser storage. Email addresses are not displayed on the board.

The arithmetic check is a demo usability check, not a security measure. This frontend has no application server or shared database.

## Images

Edit `src/data/siteImages.js` to configure imagery. Local images belong in `public/images/`; remote HTTPS image URLs can also be used. Image loading falls back to a gradient if an image is unavailable.
