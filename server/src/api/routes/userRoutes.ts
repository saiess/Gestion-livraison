import express from 'express';

import {
  signin, createUser, getUsers, updateUser, deleteUser,
} from '../controllers/UserControllers';

import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', auth, getUsers);
router.post('/signin', auth, signin);
router.post('/create', createUser);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
