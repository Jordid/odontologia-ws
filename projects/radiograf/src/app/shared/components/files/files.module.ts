import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePreviewComponent } from './file-preview/file-preview.component';

@NgModule({
  declarations: [FilePreviewComponent],
  imports: [CommonModule],
  exports: [FilePreviewComponent],
})
export class FilesModule {}
