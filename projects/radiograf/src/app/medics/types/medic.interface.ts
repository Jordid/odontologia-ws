import { IPerson } from '../../core/types/person.interface';
import { MedicStatusEnum } from './medic-status.enum';

export interface IMedic {
  creationDate: string;
  doctorId: number;
  lastUpdateDate: string;
  person: IPerson;
  personId: number;
  specilty: string;
  status: MedicStatusEnum;
}
