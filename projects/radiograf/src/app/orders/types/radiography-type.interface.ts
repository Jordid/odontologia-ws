import { ExamCategoryTypeEnum } from './exam-category-type.enum';

export interface IRadiographyType {
  name: string;
  type: ExamCategoryTypeEnum;
  typeId: number;
}
