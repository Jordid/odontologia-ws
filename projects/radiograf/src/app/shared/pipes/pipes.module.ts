import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenderPipe } from './gender/gender.pipe';

@NgModule({
  declarations: [GenderPipe],
  imports: [CommonModule],
  exports: [GenderPipe],
})
export class PipesModule {}
