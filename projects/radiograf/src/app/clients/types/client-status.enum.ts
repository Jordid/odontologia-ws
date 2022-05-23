export enum ClientStatusEnum {
  ACTIVE = 'ACTIVE',
}

export const ClientStatusArray = [ClientStatusEnum.ACTIVE];

export const ClientStatusInfo = [
  {
    [ClientStatusEnum.ACTIVE]: {
      name: 'Activo',
    },
  },
];
