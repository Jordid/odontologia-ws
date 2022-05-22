export enum MedicStatusEnum {
  ACTIVE = 'ACTIVE',
}

export const MedicStatusArray = [MedicStatusEnum.ACTIVE];

export const MedicStatusInfo = [
  {
    [MedicStatusEnum.ACTIVE]: {
      name: 'Activo',
    },
  },
];
