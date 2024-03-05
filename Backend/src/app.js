import express, { urlencoded } from "express";
import cors from "cors";
const app = express();

app.use(
   cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
   })
);
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));

import emplyRouter from "./routes/employ.routes.js";
app.use("/api/v1/emply", emplyRouter);

export { app };