import { Router } from "express";
import multer from "multer";
import path from "node:path";

import { createCharacter } from "../app/use-cases/characters/createCharacter";
import { listCharacters } from "../app/use-cases/characters/listCharacters";

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname.replace(/\s/g, "")}`);
    },
  }),
  fileFilter(req, file, callback) {
    if (file.mimetype.startsWith("image/")) {
      callback(null, true);
    } else {
      callback(new Error("Only images allowed"));
    }
  },
});

export const charactersRouter = Router();

charactersRouter.get("/", listCharacters);
charactersRouter.post("/", upload.single("avatar"), createCharacter);
