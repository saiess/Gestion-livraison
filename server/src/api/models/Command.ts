import mongoose from 'mongoose';

import '../../config/DatabaseConfig';

export const CommandSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  cityfrom: {
    type: String,
    required: true,
  },
  cityto: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  date: { type: Date },
  Driver: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
}, { timestamps: true });

const CommandModel = mongoose.model('command', CommandSchema);

export default CommandModel;
