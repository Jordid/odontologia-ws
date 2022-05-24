import { IUser } from '../../auth/types/user-interface';
import { IClient } from '../../clients/types/client.interface';
import { IMedic } from '../../medics/types/medic.interface';
import { OrderStatusEnum } from './order-status.enum';

export interface IOrder {
  client: IClient;
  clientId: number;
  creationDate: number;
  doctorId: number;
  lastUpdateDate: string;
  medic: IMedic;
  orderId: number;
  sendDate: string;
  status: OrderStatusEnum;
  user: IUser;
  userId: number;
}
