export enum RadiographyTypeEnum {
  PANORAMIC = 'PANORAMIC',
  LATERAL_CEPHALIC = 'LATERAL_CEPHALIC',
  PERIAPICAL = 'PERIAPICAL',
}

export const RadiographyTypeArray = [
  RadiographyTypeEnum.PANORAMIC,
  RadiographyTypeEnum.LATERAL_CEPHALIC,
  RadiographyTypeEnum.PERIAPICAL,
];

export const RadiographyTypeInfo = [
  {
    [RadiographyTypeEnum.PANORAMIC]: {
      name: 'Parnorámica',
    },
  },
  {
    [RadiographyTypeEnum.LATERAL_CEPHALIC]: {
      name: 'Cefálica lateral',
    },
  },
  {
    [RadiographyTypeEnum.PERIAPICAL]: {
      name: 'Periapical',
    },
  },
];
