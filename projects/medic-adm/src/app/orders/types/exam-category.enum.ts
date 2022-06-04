export enum ExamCategoryEnum {
  RADIOGRAFHY = '1',
  TOMOGRAPHY = '2',
  STL = '3',
}

export const ExamCategoryArray = [
  ExamCategoryEnum.RADIOGRAFHY,
  ExamCategoryEnum.TOMOGRAPHY,
  ExamCategoryEnum.STL,
];

export const ExamCategoryInfo = [
  {
    [ExamCategoryEnum.RADIOGRAFHY]: {
      name: 'Radiografía',
    },
  },
  {
    [ExamCategoryEnum.TOMOGRAPHY]: {
      name: 'Tomografía',
    },
  },
  {
    [ExamCategoryEnum.STL]: {
      name: 'STL',
    },
  },
];
