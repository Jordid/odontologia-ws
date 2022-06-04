import { IUser } from '../../auth/types/user-interface';
import { DocumentTypeEnum } from './document-type.enum';
import { GenderEnum } from './gender.enum';

export interface IPerson {
  age: number;
  birthDate: string;
  creationDate: string;
  document: string;
  documentType: DocumentTypeEnum;
  firstName: string;
  gender: GenderEnum;
  lastName: string;
  lastUpdateDate: string;
  personId: number;
  user: IUser;
}
