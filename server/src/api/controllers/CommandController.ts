import { Response, Request } from 'express';

import CommandModel from '../models/CommandModel';

// import { User } from '../interfaces/User';
import mongoose from '../../config/DatabaseConfig';

//* ** get All Commands ****** */
export const getAll = async (req: Request, res: Response) => {
  try {
    const GetCommand = await CommandModel.find();

    res.status(200).json(GetCommand);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//* ** create Commands ****** */
export const createCommand = async (req: Request, res:Response) => {
  const Command = req.body;

  const newCommand = new CommandModel(Command);

  try {
    await newCommand.save();

    res.status(201).json(newCommand);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

//* ** Update a Command ****** */
export const updateCommand = async (req: Request, res: Response) => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const { id: _id } = req.params;

  const CommandToUpdate = req.body;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no Command with that id');

  // eslint-disable-next-line max-len
  const updatedCommand = await CommandModel.findByIdAndUpdate(_id, CommandToUpdate, { new: true });

  return res.json(updatedCommand);
};

//* ** delete a Command ****** */
export const deleteCommand = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no Command with that id');

  await CommandModel.findByIdAndRemove(_id);

  return res.json({ message: 'Command has been deleted successfully' });
};
