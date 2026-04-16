import { Router } from "express";
import { charactersRouter } from "./routes/characters.routes";
import { categoriesRouter } from "./routes/ categories.routes";

export const router = Router();

router.use("/categories", categoriesRouter);
router.use("/characters", charactersRouter);
