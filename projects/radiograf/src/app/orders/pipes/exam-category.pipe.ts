import { Pipe, PipeTransform } from '@angular/core';
import {
  ExamCategoryEnum,
  ExamCategoryInfo
} from '../types/exam-category.enum';

@Pipe({
  name: 'examCategory',
})
export class ExamCategoryPipe implements PipeTransform {
  transform(value: ExamCategoryEnum): string {
    if (value) {
      const key = value.trim().toUpperCase();
      for (const iterator of ExamCategoryInfo) {
        if (Object.keys(iterator)[0] === key) {
          const auxIterator = iterator as any;
          return auxIterator[key].name;
        }
      }
    }
    return null as any;
  }
}
