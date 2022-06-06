import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
  declarations: [FilePreviewComponent],
  imports: [CommonModule, DialogsModule],
  exports: [FilePreviewComponent],
})
export class FilesModule {}
