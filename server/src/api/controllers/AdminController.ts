import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import { Response, Request } from 'express';

import AdminModel from '../models/Admin';

import mongoose from '../../config/DatabaseConfig';

import emailLogin from '../helpers/Email.Login';
import UserModel from '../models/User';
import { Admin } from '../interfaces/Admin';

//* ** get Admin ****** */
export const getAdmin = async (req: Request, res: Response) => {
  AdminModel.find({}, (err: any, result: any) => {
    if (err) {
      console.log('got it');
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

//* ** signin ****** */
export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await AdminModel.findOne({ email });
    console.log(existingUser);

    if (!existingUser) return res.status(404).json({ message: 'User does not exist' });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'invalid informations' });

    const token = jwt.sign({ email: existingUser.email, id: existingUser.id, role: existingUser.role }, 'isUser', { expiresIn: '1h' });
    console.log('is', token);

    emailLogin(existingUser.email);

    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Somthing went wrong' });
  }
};

//* ** signiup ****** */
export const createAdmin = async (req: Request, res:Response) => {
  const {
    email, password, name,
  } = req.body;

  console.log(req.body);
  try {
    const existingAdmin = await AdminModel.findOne({ email });

    if (existingAdmin) return res.status(404).json({ message: 'Admin already exist' });

    const hashedPassword = await bcrypt.hash(password, 12);

    console.log('heeeeeeeeeere');
    const result = await AdminModel.create({
      email, password: hashedPassword, name,
    }) as Admin;

    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    const token = jwt.sign({ email: result.email, _id: result._id }, 'isUser', { expiresIn: '1h' });

    return res.status(200).json({ result, token });
  } catch {
    return res.status(500).json({ message: 'Somthing went wrong' });
  }
};

//* ** delete a User ****** */
export const deleteUser = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no User with that id');

  await UserModel.findByIdAndRemove(_id);

  return res.json({ message: 'User has been deleted successfully' });
};
