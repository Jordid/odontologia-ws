import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ProgressSpinnerComponent],
})
export class SpinnersModule {}
