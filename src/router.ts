import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/use-cases/categories/createCategory';
import { listCategories } from './app/use-cases/categories/listCategories';
import { createCharacter } from './app/use-cases/characters/createCharacter';
import { listCharacters } from './app/use-cases/characters/listCharacters';
import { listCharactersByCategory } from './app/use-cases/categories/listCharactersByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/characters', listCharacters);

router.post('/characters', upload.single('avatar') ,createCharacter);

router.get('/categories/:categoryId/characters', listCharactersByCategory);
