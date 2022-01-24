import express from 'express';

import {
  getAll, createCommand, updateCommand, deleteCommand,
} from '../controllers/CommandController';

// import auth from '../middlewares/auth';

const router = express.Router();

router.get('/getAll', getAll);
router.post('/create', createCommand);
router.patch('/update/:id', updateCommand);
router.delete('/delete/:id', deleteCommand);

export default router;
