import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  res.status(501).json({ error: "TODO: implement /api/auth/register" });
});

router.post("/login", async (req, res) => {
  res.status(501).json({ error: "TODO: implement /api/auth/login" });
});

router.post("/logout", async (req, res) => {
  res.status(501).json({ error: "TODO: implement /api/auth/logout" });
});

router.get("/me", async (req, res) => {
  res.status(501).json({ error: "TODO: implement /api/auth/me" });
});

export default router;
