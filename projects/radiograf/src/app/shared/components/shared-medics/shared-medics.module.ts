import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MedicInfoBlockComponent } from './medic-info-block/medic-info-block.component';

@NgModule({
  declarations: [MedicInfoBlockComponent],
  imports: [CommonModule],
  exports: [MedicInfoBlockComponent],
})
export class SharedMedicsModule {}
