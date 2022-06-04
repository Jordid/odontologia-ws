import { IPerson } from '../../core/types/person.interface';
import { ClientStatusEnum } from './client-status.enum';

export interface IClient {
  clientId: number;
  creationDate: string;
  lastUpdateDate: string;
  person: IPerson;
  personId: number;
  status: ClientStatusEnum;
}
