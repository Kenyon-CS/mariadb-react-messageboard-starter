import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(501).json({ error: "TODO: implement GET /api/posts (v2)" });
});

router.post("/", async (req, res) => {
  res.status(501).json({ error: "TODO: implement POST /api/posts (v2)" });
});

export default router;
