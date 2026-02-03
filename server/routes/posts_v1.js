import express from "express";
import { pool } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT id, author, content, created_at FROM posts ORDER BY created_at DESC LIMIT 200"
  );
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { author, content } = req.body || {};
  if (!author || !author.trim()) return res.status(400).json({ error: "Missing author" });
  if (!content || !content.trim()) return res.status(400).json({ error: "Empty post" });

  const [r] = await pool.execute(
    "INSERT INTO posts (author, content) VALUES (?, ?)",
    [author.trim(), content.trim()]
  );
  res.json({ id: r.insertId });
});

export default router;
