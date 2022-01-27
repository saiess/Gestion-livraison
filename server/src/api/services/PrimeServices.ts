import { Response, Request } from 'express';

import PrimeModel from '../models/Prime';

// ------------------- Accept/Refuse a command -------------------

export const primesDrivers = async (req: Request, res: Response) => {
  const prime = await PrimeModel.find().populate('command_id').populate('driver_id');
  const date = new Date().getMonth() + 1;
  let distance: number = 0;
  let price: number = 0;

  console.log(prime);
  prime.forEach((element) => {
    console.log('we areeeeeeeeeeeeeeeeeee insiiiiiiiiiiiiiiide');
    if (req.params.id === element.driver_id.id && element.Month === date) {
      //   distance += parseInt(element.Command_id.Distance);
      //   price += parseInt(element.Command_id.price);
      distance += element.command_id.Distance;
      price += element.command_id.price;
      console.log(distance, price);
    }
  });

  let distancePrime = 0;
  if (distance < 1000) {
    distancePrime = price * 0.15;
  }

  console.log('we are outtttttttttttttt');
  console.log(distancePrime);
  res.json(distancePrime);
};

export default { primesDrivers };
