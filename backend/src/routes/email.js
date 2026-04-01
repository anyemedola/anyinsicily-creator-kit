import express from "express";
import { generateEmail } from "../services/emailGenerator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await generateEmail(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;