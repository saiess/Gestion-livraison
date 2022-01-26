import mongoose from 'mongoose';

import '../../config/DatabaseConfig';

export const VehiculeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const VehiculeModel = mongoose.model('vehicule', VehiculeSchema);

export default VehiculeModel;
