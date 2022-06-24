import { Pipe, PipeTransform } from '@angular/core';
import { StudyTypeEnum, StudyTypeInfo } from '../types/study-type.enum';

@Pipe({
  name: 'studyType',
})
export class StudyTypePipe implements PipeTransform {
  transform(value: StudyTypeEnum): string {
    if (value) {
      const key = value.trim().toUpperCase();
      for (const iterator of StudyTypeInfo) {
        if (Object.keys(iterator)[0] === key) {
          const auxIterator = iterator as any;
          return auxIterator[key].name;
        }
      }
    }
    return null as any;
  }
}
