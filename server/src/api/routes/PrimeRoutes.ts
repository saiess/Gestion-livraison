import express from 'express';

import {
  getAll, updatePrime,
} from '../controllers/PrimeControllers';

// import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', getAll);
router.post('/create', updatePrime);

export default router;
