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
  doctor: IMedic;
  orderId: number;
  sendDate: string;
  status: OrderStatusEnum;
  user: IUser;
  userId: number;
}

export interface ICreateOrder {
  clientId: number;
  doctorId: number;
}

export interface IUpdateOrder {
  status: OrderStatusEnum;
}

export interface ICreateExam {
  description: string;
  isAddional: boolean;
  storageId: string;
  teeth: string;
  typeId: number;
  price: number;
}
