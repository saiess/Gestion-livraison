import express from 'express';

import {
  signin, getAdmin, deleteUser, createAdmin,
} from '../controllers/AdminController';

import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', auth, getAdmin);
router.post('/signin', auth, signin);
router.post('/create', createAdmin);
router.delete('/delete/:id', deleteUser);

export default router;
