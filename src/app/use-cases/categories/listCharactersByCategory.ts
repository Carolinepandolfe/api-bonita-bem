import { Request, Response } from "express";
import { Character } from "../../models/characters";

export async function listCharactersByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const characters = await Character.find({ category: categoryId }).populate(
      "category",
    );
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
