# Campus Club Finder

A single-page web app that helps students discover, learn about, and join student clubs.
No backend and no login: all data lives in the browser.

> Full walkthrough with screenshots: [DOCUMENTATION.md](./DOCUMENTATION.md)

## Tech stack

- [Vite](https://vite.dev) - project setup and bundling
- [React](https://react.dev) - functional components and hooks
- [React Router](https://reactrouter.com) - client-side routing
- [Tailwind CSS](https://tailwindcss.com) - all styling

## Features

- Home page with hero section and a button to the club list
- Club list with **sorting** (Name A-Z / Z-A) and a **Grid / List view toggle**
- Club detail page with description, upcoming events, and a **Join Club** button
- Joined clubs are saved in `localStorage` and survive a page reload
- About page and a friendly 404 page
- Responsive (mobile, tablet, desktop) and keyboard accessible

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Routes

| Path             | Page          |
| ---------------- | ------------- |
| `/`              | Home          |
| `/clubs`         | Club list     |
| `/clubs/:clubId` | Club detail   |
| `/about`         | About         |
| `*`              | 404 Not Found |

## Project structure

```
src/
  data/clubs.js            the 5 default clubs (separate from the UI)
  hooks/useJoinedClubs.js  joined-club state synced to localStorage
  components/              Navbar, ClubCard, SortSelect, ViewToggle, ButtonLink
  pages/                   Home, ClubList, ClubDetail, About, NotFound
  App.jsx                  layout and route table
  main.jsx                 entry point (BrowserRouter)
public/images/             club illustrations (SVG)
```

## How the state works

- `ClubList` holds `sort` and `view` with `useState` and passes them (plus setters) to
  `SortSelect` and `ViewToggle` as props. `ClubCard` receives `view` to change its layout.
- `useJoinedClubs` reads the joined club ids from `localStorage` on first render and writes them
  back whenever they change (key: `campus-club-finder:joined-clubs`).
