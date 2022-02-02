import express from 'express';

import {
  signin, createUser, getUsers, updateUser, deleteUser,
} from '../controllers/UserControllers';

import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', auth, getUsers);
router.post('/signin', signin);
router.post('/create', auth, createUser);
router.patch('/update/:id', auth, updateUser);
router.delete('/delete/:id', auth, deleteUser);

export default router;
