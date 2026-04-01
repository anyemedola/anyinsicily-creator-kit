import express from "express";

const router = express.Router();

router.post("/calendar", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Password required." });
  }

  if (password === process.env.CALENDAR_PASSWORD) {
    return res.json({ ok: true });
  }

  return res.status(401).json({ ok: false, error: "Wrong password." });
});

export default router;
