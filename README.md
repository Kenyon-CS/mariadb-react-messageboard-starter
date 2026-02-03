# MariaDB + Express + React Mini Messageboard (Starter)

This starter is designed for a **shared Linux server** environment.

## Your environment assumptions (important)
- Your Linux username is your email address **before** the `@` (e.g. `jsmith` for `jsmith@kenyon.edu`)
- Your **MariaDB database name** is the same as your username.
- You must run your web app on **port 41xx**, where **xx are the last 2 digits of your student ID**.
  - Example: student ID ends in `37` → use **4137**.

---

## Project structure

```
.
├── server/    # Express API (currently "v1" working demo)
├── client/    # React (Vite) app (basic platform)
└── docs/      # v2 schema + API contracts you must implement
```

### What currently works (v1)
- Express server with:
  - `GET /api/health`
  - `GET /api/posts` (public)
  - `POST /api/posts` (public, **no auth**)
- React app that:
  - loads and displays posts
  - lets anyone add a post

### Your assignment (implement v2)
You are given:
- an updated DB schema: `docs/schema_v2.sql`
- an API contract: `docs/API_CONTRACT_v2.md`
- front-end interface stubs: `docs/FRONTEND_CONTRACT_v2.md`

You must modify the code to match **v2**:
- add **register + login + logout**
- enforce: only logged-in users can create posts
- include author info in post lists

---

## Quick start

### 1) Install dependencies
```bash
make install
```

### 2) Create your `.env` files (server + client)
Run the helper script:

```bash
./scripts/setup-env.sh
```

It will ask for your last 2 student-id digits and write:
- `server/.env`
- `client/.env`

### 3) Initialize the database (v1 schema)
This creates the **v1 demo tables** (no auth). You will later replace with v2.

```bash
make initdb-v1
```

### 4) Run (two terminals)
Terminal A:
```bash
make run-server
```

Terminal B:
```bash
make run-client
```

Open the URL printed by Vite (usually `http://localhost:5173`).

---

## Switching to v2 (your work)
When you are ready:
1. Replace v1 tables with v2 tables:
   ```bash
   make initdb-v2
   ```
2. Implement the v2 backend routes + session behavior
3. Update the React UI to the v2 frontend contract

