import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TotalPreviewCardComponent } from './total-preview-card/total-preview-card.component';

@NgModule({
  declarations: [TotalPreviewCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TotalPreviewCardComponent],
})
export class CardsModule {}
