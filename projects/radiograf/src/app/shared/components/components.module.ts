import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoResultsDisplayInTableComponent } from './no-results-display-in-table/no-results-display-in-table.component';

@NgModule({
  declarations: [NoResultsDisplayInTableComponent],
  imports: [CommonModule],
  exports: [NoResultsDisplayInTableComponent],
})
export class ComponentsModule {}
