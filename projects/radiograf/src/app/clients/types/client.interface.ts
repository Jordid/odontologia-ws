import { IPerson } from '../../core/types/person.interface';
import { MedicStatusEnum } from './medic-status.enum';

export interface IClient {
  personId: number;
  specilty: string;
  status: MedicStatusEnum;
  creationDate: string;
  lastUpdateDate: string;
  clientId: number;
  person: IPerson;
}
