import express from 'express';

import {
  signin, getAdmin, deleteUser, createAdmin,
} from '../controllers/AdminController';

// import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', getAdmin);
router.post('/signin', signin);
router.post('/create', createAdmin);
router.delete('/delete/:id', deleteUser);

export default router;
