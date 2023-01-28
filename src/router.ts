import { Router } from 'express';

export const router = Router();

router.get('/categories', (req, res) => {
  res.send('test');
});

router.post('/categories', (req, res) => {
  res.send('test');
});

router.get('/characters', (req, res) => {
  res.send('test');
});

router.post('/characters', (req, res) => {
  res.send('test');
});

router.get('/categories/:categoryId/characters', (req, res) => {
  res.send('test');
});
