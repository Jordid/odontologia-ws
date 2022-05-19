import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MedicInfoBlockComponent } from './medic-info-block/medic-info-block.component';
import { MedicTextSearcherComponent } from './medic-text-searcher/medic-text-searcher.component';

@NgModule({
  declarations: [MedicInfoBlockComponent, MedicTextSearcherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MedicInfoBlockComponent, MedicTextSearcherComponent],
})
export class SharedMedicsModule {}
