
import { model, Schema } from 'mongoose';

export const Character = model('Character', new Schema({
  name: {
    type: String,
    required: true
  },
  avatarPath: String,
  about: String,
  gender: String,
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  species: String
}));
