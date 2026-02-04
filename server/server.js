import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";

import postsV1 from "./routes/posts_v1.js";
// v2 routes (assignment): uncomment once implemented
// import authV2 from "./routes/auth_v2.js";
// import postsV2 from "./routes/posts_v2.js";

const app = express();
app.use(express.json());

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

app.get("/api/health", (req, res) => res.json({ ok: true }));

// v1 working demo
app.use("/api/posts", postsV1);

// v2 assignment (TODO)
// app.use("/api/auth", authV2);
// app.use("/api/posts", postsV2);

const port = Number(process.env.PORT || 3000);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on http://10.192.145.179:${port}`);
});
