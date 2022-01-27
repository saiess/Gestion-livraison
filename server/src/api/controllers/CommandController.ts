import { Response, Request } from 'express';

import axios from 'axios';

import CommandModel from '../models/Command';

// import { User } from '../interfaces/User';
import mongoose from '../../config/DatabaseConfig';
import emailCommand from '../helpers/Email.Command';

import UserModel from '../models/User';

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createCommand = async (req: Request, res: Response) => {
  const distance = await axios(
    `https://www.distance24.org/route.json?stops=${req.body.cityfrom}|${req.body.cityto}`,
  );

  let calculatedPrice = req.body.weight * 40;

  if (req.body.weight > 3) {
    calculatedPrice = 40 * 3 + (req.body.weight - 3) * 5;
  }
  // const Command = req.body;

  const Command = new CommandModel({
    number: req.body.number,
    cityfrom: req.body.cityfrom,
    cityto: req.body.cityto,
    weight: req.body.weight,
    distance: `${distance.data.distance} KM`,
    status: 'En cour',
    price: calculatedPrice,
    zone: req.body.zone,
  });

  console.log(Command);
  const newCommand = new CommandModel(Command);

  // console.log(newCommand);
  newCommand
    .save()
    .then(async () => {
      const driver = await UserModel.find({ role: 'driver' }).populate(
        'vehiculeId',
      );

      console.log(driver);
      //* Sending email to the drivers

      driver.forEach((element) => {
        if (
          element.vehiculeId === 'car'
          && req.body.weight > 0
          && req.body.weight <= 200
        ) {
          emailCommand(element.email);
        } else if (
          element.vehiculeId.type === 'PetitCamio'
          && req.body.weight > 200
          && req.body.weight <= 800
        ) {
          emailCommand(element.email);
        } else if (
          element.vehiculeId.type === 'GrandCamio'
          && req.body.weight > 800
          && req.body.weight <= 1600
        ) {
          emailCommand(element.email);
        }
      });
    })
    .catch((err: any) => console.log(err));
  // try {
  //   await newCommand.save();

  res.status(201).json(newCommand);
  // } catch (error: any) {
  //   res.status(409).json({ message: error.message });
  // }
};

//* ** Update a Command ****** */
export const updateCommand = async (req: Request, res: Response) => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const { id: _id } = req.params;

  const CommandToUpdate = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('no Command with that id');
  }

  // eslint-disable-next-line max-len
  const updatedCommand = await CommandModel.findByIdAndUpdate(
    _id,
    CommandToUpdate,
    { new: true },

  );

  return res.json(updatedCommand);
};

//* ** delete a Command ****** */
export const deleteCommand = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('no Command with that id');
  }

  await CommandModel.findByIdAndRemove(_id);

  return res.json({ message: 'Command has been deleted successfully' });
};

//* *** get command of a specific driver ****

export const getCommandofDriver = async (req: Request, res: Response) => {
  try {
    const GetCommandDriver = await CommandModel.find().populate({
      path: 'driver',
      match: { role: 'driver' },
    });

    res.status(200).json(GetCommandDriver);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
