import { IUser } from './user-interface';

export interface OAuth {
  success: boolean;
  token: string;
  user: IUser;
}
