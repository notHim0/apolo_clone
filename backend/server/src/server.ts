import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";
import doctorRouter from "./routes/doctor.router";
dotenv.config();
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

app.use(globalErrorHandler);
app.use("/api", doctorRouter);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
