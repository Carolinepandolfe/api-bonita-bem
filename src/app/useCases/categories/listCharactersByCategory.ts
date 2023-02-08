import { Request, Response } from 'express';
import { Character } from '../../models/Character';

export async function listCharactersByCategory(req: Request, res: Response) {
  try {
    const  { categoryId } = req.params;

    const characters = await Character.find().where('category').equals(categoryId);

    res.json(characters);

  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
