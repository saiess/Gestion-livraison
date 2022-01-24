import mongoose from 'mongoose';

import '../../config/DatabaseConfig';

export const CommandSchema = new mongoose.Schema({
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
  km: {
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
  createdAT: {
    type: Date,
    default: new Date(),
  },
});

const CommandModel = mongoose.model('command', CommandSchema);

export default CommandModel;
