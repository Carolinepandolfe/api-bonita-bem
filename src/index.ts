import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27016/IDJ')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(port,() => {
      console.log(`🥑 Servidor bonito bem:  http://localhost:${port}`);
    });
  })
  .catch(() => console.log('erro'));

