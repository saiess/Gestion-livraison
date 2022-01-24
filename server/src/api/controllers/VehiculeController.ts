import { Response, Request } from 'express';

import VehiculeModel from '../models/Vehicule';

// import { User } from '../interfaces/User';
import mongoose from '../../config/DatabaseConfig';

//* ** get All Vehicules ****** */
export const getAll = async (req: Request, res: Response) => {
  try {
    const GetVehicules = await VehiculeModel.find();

    res.status(200).json(GetVehicules);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//* ** create Vehicule ****** */
export const createVehicule = async (req: Request, res:Response) => {
  const Vehicule = req.body;

  const newVehicule = new VehiculeModel(Vehicule);

  try {
    await newVehicule.save();

    res.status(201).json(newVehicule);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

//* ** Update a User ****** */
export const updateVehicule = async (req: Request, res: Response) => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const { id: _id } = req.params;

  const VehiculeToUpdate = req.body;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no Vehicule with that id');

  // eslint-disable-next-line max-len
  const updatedVehicule = await VehiculeModel.findByIdAndUpdate(_id, VehiculeToUpdate, { new: true });

  return res.json(updatedVehicule);
};

//* ** delete a User ****** */
export const deleteVehicule = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId
    .isValid(_id)) return res.status(404).send('no Vehicule with that id');

  await VehiculeModel.findByIdAndRemove(_id);

  return res.json({ message: 'Vehicule has been deleted successfully' });
};
