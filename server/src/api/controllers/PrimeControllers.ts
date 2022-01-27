import { Response, Request } from 'express';

import PrimeModel from '../models/Prime';

import CommandModel from '../models/Command';

//* ** get All Primes ****** */
export const getAll = async (req: Request, res: Response) => {
  try {
    const GetPrime = await PrimeModel.find();
    res.status(200).json(GetPrime);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePrime = async (req: Request, res: Response) => {
  const date = new Date();
  const month = date.getMonth() + 1;

  // eslint-disable-next-line no-underscore-dangle
  const id = req.params._id;

  CommandModel.findByIdAndUpdate({ _id: id }, { Status: req.body.status, Driver: req.body.driver })
    .then((data: any) => {
      if (!data) {
        res.status(404).send({
          message: 'Something went wrong !!',
        });
      } else {
        res.send({
          message: 'Command updated successfully!',
        });
        const prime = new PrimeModel({
          Command_id: id,
          Driver_id: req.body.driver,
          Month: month,
        });
        prime.save();
      }
    })
    .catch((err: any) => console.log(err));
};

export default { getAll, updatePrime };
