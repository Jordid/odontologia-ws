export enum StudyTypeEnum {
  JARABAK = 'JARABAK',
  MCNAMARA = 'MCNAMARA',
  RICKETTS = 'RICKETTS',
  STEINER = 'STEINER',
}

export const StudyTypeArray = [
  StudyTypeEnum.JARABAK,
  StudyTypeEnum.MCNAMARA,
  StudyTypeEnum.RICKETTS,
  StudyTypeEnum.STEINER,
];

export const StudyTypeInfo = [
  {
    [StudyTypeEnum.JARABAK]: {
      name: 'Jarabak',
    },
  },
  {
    [StudyTypeEnum.MCNAMARA]: {
      name: 'McNamara',
    },
  },
  {
    [StudyTypeEnum.RICKETTS]: {
      name: 'Ricketts',
    },
  },
  {
    [StudyTypeEnum.STEINER]: {
      name: 'Steiner',
    },
  },
];
