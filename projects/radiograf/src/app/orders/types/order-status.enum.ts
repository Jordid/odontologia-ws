export enum OrderStatusEnum {
  CREATED = 'CREATED',
  SENT = 'SENT',
}

export const OrderStatusArray = [OrderStatusEnum.CREATED, OrderStatusEnum.SENT];

export const OrderStatusInfo = [
  {
    [OrderStatusEnum.CREATED]: {
      name: 'Creado',
    },
  },
  {
    [OrderStatusEnum.SENT]: {
      name: 'Enviado',
    },
  },
];
