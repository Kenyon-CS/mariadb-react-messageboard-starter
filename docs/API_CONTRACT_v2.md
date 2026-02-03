# API Contract (v2)

Base URL: `http://localhost:41xx`

Auth: cookie-based sessions. Frontend uses `credentials: "include"`.

## Endpoints

### GET /api/health
200:
```json
{ "ok": true }
```

### POST /api/auth/register
Body:
```json
{ "name": "Ada", "email": "ada@example.com", "password": "secret" }
```
200:
```json
{ "id": 1, "name": "Ada", "email": "ada@example.com" }
```
409:
```json
{ "error": "Email already registered" }
```

### POST /api/auth/login
Body:
```json
{ "email": "ada@example.com", "password": "secret" }
```
200 user object, or 401 invalid.

### POST /api/auth/logout
200:
```json
{ "ok": true }
```

### GET /api/me
200 user object, or 401:
```json
{ "error": "Not logged in" }
```

### GET /api/posts
200:
```json
[
  {
    "id": 10,
    "content": "Hello",
    "created_at": "2026-02-03T17:12:00.000Z",
    "user": { "id": 1, "name": "Ada", "email": "ada@example.com" }
  }
]
```

### POST /api/posts
Requires login.
Body:
```json
{ "content": "My message" }
```
200:
```json
{ "id": 11 }
```
