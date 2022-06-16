import { IOrder } from './order.interface';
export interface IExamType {
  name: string;
}
export interface IExam {
  description: string;
  imageUrl: string;
  miniatureUrl: string;
  order: IOrder;
  orderId: number;
  radiographyId: number;
  type: IExamType;
}
