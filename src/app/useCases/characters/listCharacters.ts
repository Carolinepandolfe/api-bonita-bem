import { Request, Response } from 'express';
import { Character } from '../../models/Character';

export async function listCharacters(req: Request, res: Response) {
  try {
    const characters = await Character.find();

    res.json(characters);

  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
