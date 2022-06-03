export enum ExamCategoryEnum {
  RADIOGRAFHY = '1',
  TOMOGRAPHY = '2',
  RADIOLOGICAL_STUDY = '3',
}

export const ExamCategoryArray = [
  ExamCategoryEnum.RADIOGRAFHY,
  ExamCategoryEnum.TOMOGRAPHY,
  ExamCategoryEnum.RADIOLOGICAL_STUDY,
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
    [ExamCategoryEnum.RADIOLOGICAL_STUDY]: {
      name: 'Estudio radiológico',
    },
  },
];
