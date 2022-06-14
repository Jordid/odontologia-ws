import { Pipe, PipeTransform } from '@angular/core';
import {
  ClientStatusEnum,
  ClientStatusInfo
} from '../types/client-status.enum';

@Pipe({
  name: 'clientStatus',
})
export class ClientStatusPipe implements PipeTransform {
  transform(value: ClientStatusEnum): string {
    if (value) {
      const key = value.trim().toUpperCase();
      for (const iterator of ClientStatusInfo) {
        if (Object.keys(iterator)[0] === key) {
          const auxIterator = iterator as any;
          return auxIterator[key].name;
        }
      }
    }
    return null as any;
  }
}
