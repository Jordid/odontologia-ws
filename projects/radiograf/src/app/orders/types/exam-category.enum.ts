export enum ExamCategoryEnum {
  RADIOGRAFHY = 'RADIOGRAFHY',
  TOMOGRAPHY = 'TOMOGRAPHY',
  RADIOLOGICAL_STUDY = 'RADIOLOGICAL_STUDY',
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
