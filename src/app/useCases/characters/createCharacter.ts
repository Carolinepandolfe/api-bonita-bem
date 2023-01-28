
import { Request, Response } from 'express';
import { Character } from '../../models/Character';

export async function createCharacter(req: Request, res: Response) {
  try {
    const avatarPath = req.file?.filename;
    const { name, about, gender, category, species } = req.body;

    const character = await Character.create({
      name,
      about,
      gender,
      avatarPath,
      category: JSON.parse(category),
      species
    });

    res.status(201).json(character);

  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }

}
