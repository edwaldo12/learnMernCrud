import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./src/routes/routes.js";
import mongoose from "mongoose";
import uri from "./src/config/connection.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(routes);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App is listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
