import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import path from "path";

// Routes
import userRoutes from "./routes/userRoutes.js";
import markingRoutes from "./routes/markingRoutes.js";
import panelRoutes from "./routes/panelRoutes.js";

dotenv.config();

//connect database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Calling Routes
app.use("/user", userRoutes);
app.use('/marking', markingRoutes);
app.use('/panel', panelRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Api is working");
});

//create port
const PORT = process.env.PORT || 6500;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`)
);