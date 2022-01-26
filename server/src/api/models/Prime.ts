import mongoose from 'mongoose';

import '../../config/DatabaseConfig';

export const PrimeSchema = new mongoose.Schema({
  command_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'command',
    required: true,
  },
  driver_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const PrimeModel = mongoose.model('vehicule', PrimeSchema);

export default PrimeModel;
