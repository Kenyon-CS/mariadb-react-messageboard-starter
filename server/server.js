import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

import postsV1 from "./routes/posts_v1.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// If you are truly single-run (same origin), you can remove cors entirely.
// Keeping it here is fine as long as CLIENT_ORIGIN is correct.
app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
  credentials: true,
}));

app.use(session({
  name: "sid",
  secret: process.env.SESSION_SECRET || "dev",
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: "lax" },
}));

// ---- API routes FIRST ----
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/posts", postsV1);

// ---- Static React build SECOND ----
const clientDist = path.join(__dirname, "../client/dist");
app.use(express.static(clientDist));

// React router / refresh fallback (must be AFTER /api/*)
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

const port = Number(process.env.PORT || 3000);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on http://10.192.145.179:${port}`);
});
