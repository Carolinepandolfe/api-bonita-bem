import express from 'express';
import mongoose from 'mongoose';


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.listen(port,() => {
      console.log(`🥑 Servidor bonito bem:  http://localhost:${port}`);
    });
  })
  .catch(() => console.log('erro'));

