# BookMarked Frontend 📖

This is the frontend client for BookMarked, a personal library tracker. It lets you create an account, log in, and manage a shelf of books — moving each one between **to read**, **reading**, and **finished**, with a star rating once you're done.

It's built with React and TypeScript, and talks to the [BookMarked backend](../backend) over a REST API using `fetch`.

## Project stack information

- **React** (with hooks and `useReducer` for state) — [React DOCS](https://react.dev/) ⚛️
- **TypeScript** — [TypeScript DOCS](https://www.typescriptlang.org/docs/) 🧠
- **Vite** (dev server and build tool) — [Vite DOCS](https://vite.dev/) ⚡
- **React Router** (client-side routing) — [React Router DOCS](https://reactrouter.com/) 🧭
- **styled-components** (CSS-in-JS styling) — [styled-components DOCS](https://styled-components.com/) 💅
- **react-toastify** (toast notifications) — [react-toastify DOCS](https://fkhadra.github.io/react-toastify/) 🔔

## Setup ⏳

You'll need Node.js installed (latest LTS recommended).

You'll also need the [BookMarked backend](../backend) running locally on `http://localhost:4000`, since this frontend calls it directly for authentication and book data.

## How to run the project ⏲

1. Open a new terminal.
2. `cd` to the path of the project root.
3. Run `npm i` to install all packages.
4. Make sure the backend is running first (see the backend's own README).
5. Run `npm run dev`.

If everything is fine, Vite will start a dev server, usually at `http://localhost:5173`.

## Available scripts

use  `npm run dev` to starts the local dev server with hot 


## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | Home | Public landing page |
| `/login` | Login | Public |
| `/signin` | Sign up | Public |
| `/library` | My library | Requires being logged in — redirects to `/login` otherwise |
| `*` | 404 | Any unmatched route |

## Authentication

On successful login or signup, the backend's JWT is stored in `localStorage` under the key `token`, and sent back on every book request as an `Authorization: Bearer <token>` header. Logging out simply clears it.

## Features

- Create an account and log in
- Add, edit, and delete books in your library
- Move a book between **to read**, **reading**, and **finished**
- Rate finished books
- Protected `/library` route — only accessible while logged in