import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import { Response, Request } from 'express';

import UserModel from '../models/User';

import { User } from '../interfaces/User';
import mongoose from '../../config/DatabaseConfig';

import emailLogin from '../helpers/Email.Login';

//* ** get All Users ****** */
export const getUsers = async (req: Request, res: Response) => {
  UserModel.find({}, (err: any, result: any) => {
    if (err) {
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
    const existingUser = await UserModel.findOne({ email });
    console.log(existingUser);

    if (!existingUser) return res.status(404).json({ message: 'User does not exist' });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'invalid informations' });

    const token = jwt.sign({ email: existingUser.email, id: existingUser.id, role: existingUser.role }, 'isUser', { expiresIn: '1h' });
    console.log('issssssssss', token);

    emailLogin(existingUser.email);

    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    return res.status(500).json({ message: 'Somthing went wrong' });
  }
};

//* ** signiup ****** */
export const createUser = async (req: Request, res:Response) => {
  const {
    email, password, firstname, lastname, role, vehiculeId,
  } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) return res.status(404).json({ message: 'User already exist' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email, password: hashedPassword, firstname, lastname, role, vehiculeId,
    }) as User;

    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    const token = jwt.sign({ email: result.email, _id: result._id }, 'isUser', { expiresIn: '1h' });

    return res.status(200).json({ result, token });
  } catch {
    return res.status(500).json({ message: 'Somthing went wrong' });
  }
};

//* ** Update a User ****** */
export const updateUser = async (req: Request, res: Response) => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const { id: _id } = req.params;

  const userToUpdate = req.body;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no User with that id');

  const updatedUser = await UserModel.findByIdAndUpdate(_id, userToUpdate, { new: true });

  return res.json(updatedUser);
};

//* ** delete a User ****** */
export const deleteUser = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no User with that id');

  await UserModel.findByIdAndRemove(_id);

  return res.json({ message: 'User has been deleted successfully' });
};
