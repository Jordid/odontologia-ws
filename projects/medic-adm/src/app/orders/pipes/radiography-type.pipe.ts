import { Pipe, PipeTransform } from '@angular/core';
import {
  RadiographyTypeEnum,
  RadiographyTypeInfo
} from '../types/radiography-type.enum';

@Pipe({
  name: 'radiographyType',
})
export class RadiographyTypePipe implements PipeTransform {
  transform(value: RadiographyTypeEnum): string {
    if (value) {
      const key = value.trim().toUpperCase();
      for (const iterator of RadiographyTypeInfo) {
        if (Object.keys(iterator)[0] === key) {
          const auxIterator = iterator as any;
          return auxIterator[key].name;
        }
      }
    }
    return null as any;
  }
}
