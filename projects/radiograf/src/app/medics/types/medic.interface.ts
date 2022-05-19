import { IPerson } from '../../core/types/person.interface';
import { MedicStatusEnum } from './medic-status.enum';

export interface IMedic {
  personId: number;
  specilty: string;
  status: MedicStatusEnum;
  creationDate: string;
  lastUpdateDate: string;
  doctorId: number;
  person: IPerson;
}