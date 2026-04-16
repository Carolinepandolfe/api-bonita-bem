import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import path from "node:path";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27016/IDJ")
  .then(() => {
    const app = express();
    const port = process.env.PORT;

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.get("/swagger", (request, response) => {
      return response.sendFile(process.cwd() + "/swagger.json");
    });
    app.get("/docs", (request, response) => {
      return response.sendFile(process.cwd() + "/index.html");
    });

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads")),
    );
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🥑 Servidor bonito bem:  http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("erro", err));
