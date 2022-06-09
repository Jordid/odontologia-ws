import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { FilterSliderComponent } from './filter-slider/filter-slider.component';
import { FiltersEditorPanelComponent } from './filters-editor-panel/filters-editor-panel.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';

@NgModule({
  declarations: [
    ImageEditorComponent,
    FiltersEditorPanelComponent,
    FilterSliderComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ImageEditorComponent],
})
export class CanvasModule {}
