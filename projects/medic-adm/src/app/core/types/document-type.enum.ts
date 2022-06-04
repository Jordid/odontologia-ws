export enum DocumentTypeEnum {
  CEDULA = 'CEDULA',
  RUC = 'RUC',
  PASAPORTE = 'PASAPORTE',
}

export const DocumentTypeArray = [
  DocumentTypeEnum.CEDULA,
  DocumentTypeEnum.RUC,
  DocumentTypeEnum.PASAPORTE,
];

export const DocumentTypeInfo = [
  {
    [DocumentTypeEnum.CEDULA]: {
      name: 'Cédula',
    },
  },
  {
    [DocumentTypeEnum.RUC]: {
      name: 'RUC',
    },
  },
  {
    [DocumentTypeEnum.PASAPORTE]: {
      name: 'Pasaporte',
    },
  },
];
