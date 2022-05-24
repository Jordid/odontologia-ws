export enum OrderStatusEnum {
  PENDING = 'PENDING',
}

export const OrderStatusArray = [OrderStatusEnum.PENDING];

export const ClientStatusInfo = [
  {
    [OrderStatusEnum.PENDING]: {
      name: 'Pendiente',
    },
  },
];
