# MariaDB + Express + React Mini Messageboard (Starter)

This project is a starter template for a mini messageboard application using:

- MariaDB
- Express (Node.js)
- React (Vite)

It is designed to run on a shared Linux server.

---

## Environment assumptions (read this first)

These assumptions are required for the project to work correctly.

- Your Linux username is your email address before the `@`
  - Example: `jsmith@kenyon.edu` → username is `jsmith`

- Your MariaDB database name is exactly the same as your username

- You must run your Express server on port `41xx`, where:
  - `xx` = last two digits of your student ID
  - Example: student ID ends in `37` → use port `4137`

Using the wrong port or database name will cause your app to fail.

---

## Project structure

```
.
├── server/    # Express API (v1 demo is implemented)
├── client/    # React (Vite) frontend
├── docs/      # v2 schema + API / frontend contracts
└── scripts/   # helper scripts (env setup)
```

---

## What currently works (v1 demo)

The v1 code is fully working and is provided as a reference.

### Backend (Express)
- GET `/api/health` — server health check
- GET `/api/posts` — list all posts (public)
- POST `/api/posts` — create a post (public, no authentication)

### Frontend (React)
- Displays the list of posts
- Allows anyone to add a new post

There is no login, no users, and no authorization in v1.

---

## Your assignment: implement v2

You will upgrade the system to v2, which adds authentication and ownership.

### Provided materials
- Database schema: `docs/schema_v2.sql`
- Backend API contract: `docs/API_CONTRACT_v2.md`
- Frontend behavior contract: `docs/FRONTEND_CONTRACT_v2.md`

### Required v2 features
You must modify the project so that:

- Users can register, log in, and log out
- Sessions are handled using cookies
- Only logged-in users can create posts
- Posts include author information
- The backend and frontend follow the provided contracts exactly

---

## Quick start (v1 demo)

### 1) Install dependencies
From the project root:

```bash
make install
```

---

### 2) Create environment files

Run the setup script:

```bash
./scripts/setup-env.sh
```

You will be prompted for:
- the last two digits of your student ID

This script creates:
- `server/.env`
- `client/.env`

Do not edit these files by hand unless you know what you are doing.

---

### 3) Initialize the database (v1)

This creates the v1 demo tables (no users, no auth):

```bash
make initdb-v1
```

---

### 4) Run the app (two terminals)

Terminal A (server):
```bash
make run-server
```

Terminal B (client):
```bash
make run-client
```

Open the URL printed by Vite (usually `http://localhost:5173`).

---

## Switching to v2 (your work)

When you are ready to begin the assignment:

1. Replace the v1 tables with the v2 schema:
   ```bash
   make initdb-v2
   ```

2. Implement:
   - v2 authentication routes
   - session handling
   - post authorization logic

3. Update the React frontend to match the v2 frontend contract

---

## Important notes

- v1 code is reference code, not the final solution
- You are expected to modify both backend and frontend
- Follow the contracts in `docs/` closely — grading assumes contract compliance
