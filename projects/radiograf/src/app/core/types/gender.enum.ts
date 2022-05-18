export enum GenderEnum {
  FEMENINO = 'FEMENINO',
  MASCULINO = 'MASCULINO',
  OTRO = 'OTRO',
}

export type GenderType =
  | GenderEnum.FEMENINO
  | GenderEnum.MASCULINO
  | GenderEnum.OTRO;

export const GenderArray = [
  GenderEnum.FEMENINO,
  GenderEnum.MASCULINO,
  GenderEnum.OTRO,
];

export const GenderInfo = [
  {
    [GenderEnum.FEMENINO]: {
      name: 'Mujer',
    },
  },
  {
    [GenderEnum.MASCULINO]: {
      name: 'Hombre',
    },
  },
  {
    [GenderEnum.OTRO]: {
      name: 'Otro',
    },
  },
];
