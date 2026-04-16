import { Router } from "express";
import { createCategory } from "../app/use-cases/categories/createCategory";
import { listCategories } from "../app/use-cases/categories/listCategories";
import { listCharactersByCategory } from "../app/use-cases/categories/listCharactersByCategory";

export const categoriesRouter = Router();

categoriesRouter.get("/", listCategories);
categoriesRouter.post("/", createCategory);
categoriesRouter.get("/:categoryId/characters", listCharactersByCategory);
