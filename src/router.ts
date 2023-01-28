import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCharacter } from './app/useCases/characters/createCharacter';
import { listCharacters } from './app/useCases/characters/listCharacters';

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

router.get('/categories/:categoryId/characters', (req, res) => {
  res.send('test');
});
