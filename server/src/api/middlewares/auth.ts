import Jwt from 'jsonwebtoken';

import { Response, Request, NextFunction } from 'express';

import { User } from '../interfaces/User';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    // const isAuth = token.length < 500;
    let decodedData: User;

    if (token) {
      decodedData = await Jwt.verify(token, 'isUser') as User;
      console.log(decodedData);

      // eslint-disable-next-line no-underscore-dangle
      // req.user = decodedData._id;
    }

    return next();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default auth;
