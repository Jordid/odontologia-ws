import { IOrder } from './order.interface';
export interface IExam {
  imageUrl: string;
  miniatureUrl: string;
  orderId: number;
  radiographyId: number;
  order: IOrder;
}
