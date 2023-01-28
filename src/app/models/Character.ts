
import { model, Schema } from 'mongoose';

export const Character = model('Character', new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: String,
  observation: String,
  gender: String,
  episodes: [{
    name: String
  }],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
}));
