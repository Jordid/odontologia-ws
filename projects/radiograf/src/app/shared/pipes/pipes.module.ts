import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenderPipe } from './gender/gender.pipe';
import { StudyTypePipe } from './studies/study-type.pipe';

@NgModule({
  declarations: [GenderPipe, StudyTypePipe],
  imports: [CommonModule],
  exports: [GenderPipe, StudyTypePipe],
})
export class PipesModule {}
