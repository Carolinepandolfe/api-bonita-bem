
import { model, Schema } from 'mongoose';


export const Character = model('Character', new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatarPath: {
    type: String,
    default: null
  },
  about: String,
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  category: [{ // um personagem pode ter várias categorias, então é um array de referências para a coleção Category
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  species: String
}));
