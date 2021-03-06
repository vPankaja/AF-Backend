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
import studentRoutes from "./routes/studentRoutes.js";
import subtypeRoutes from "./routes/subtypeRoutes.js";

import documentSaveRoutes from "./routes/documentRoute.js"

import documentRoutes from "./routes/documentRoutes.js";
import apannelRoutes from "./routes/allocatePanelRoutes.js";


import fileUploadController from "./controllers/fileuploadController.js";
import documentUploadController from "./controllers/documentUploadController.js"


import SupEvaluation from "./routes/SupEvaluation.js"
import getTopic from "./routes/getTopic.js"

import PanelEve from "./routes/PanelEveRoute.js"

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
app.use("/student", studentRoutes);
app.use("/subtype", subtypeRoutes);

app.use("/documents/", documentSaveRoutes);

app.use('/document', documentRoutes);
app.use('/APannel',apannelRoutes);




app.use('/api/files/', fileUploadController)
app.use('/api/documents/', documentUploadController)

app.use("/supEve",SupEvaluation);
app.use("/SupTopic",getTopic);

app.use("/PanelEve",PanelEve);

const __dirname = path.resolve()
//set upload folder
app.use(express.static('/uploads/'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


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
