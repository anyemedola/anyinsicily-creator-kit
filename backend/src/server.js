import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoute from "./routes/email.js";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/generate-email", emailRoute);
app.use("/auth", authRoute);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});