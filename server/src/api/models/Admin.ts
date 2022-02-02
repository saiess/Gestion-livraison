import mongoose from 'mongoose';

import '../../config/DatabaseConfig';

export const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const AdminModel = mongoose.model('Admin', AdminSchema);

export default AdminModel;
