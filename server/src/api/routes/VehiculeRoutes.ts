import express from 'express';

import {
  getAll, updateVehicule, deleteVehicule, createVehicule,
} from '../controllers/VehiculeController';

import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', auth, getAll);
router.post('/create', createVehicule);
router.patch('/update/:id', updateVehicule);
router.delete('/delete/:id', deleteVehicule);

export default router;
