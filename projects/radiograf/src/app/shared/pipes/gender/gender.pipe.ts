import { Pipe, PipeTransform } from '@angular/core';
import { GenderEnum, GenderInfo } from '../../../core/types/gender/gender.enum';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: GenderEnum): string {
    if (value) {
      const key = value.trim().toUpperCase();
      for (const iterator of GenderInfo) {
        if (Object.keys(iterator)[0] === key) {
          const auxIterator = iterator as any;
          return auxIterator[key].name;
        }
      }
    }
    return null as any;
  }
}
