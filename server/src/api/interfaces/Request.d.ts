import { User } from './User';

declare namespace Express {
  export interface Request {
    user?: User
  }
}
