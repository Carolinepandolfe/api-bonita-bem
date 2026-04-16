import { model, Schema } from "mongoose";

//  coleção chamada Category, cada categoria tem um nome do tipo string e é obrigatório

export const Category = model(
  "Category",
  new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
  }),
);
