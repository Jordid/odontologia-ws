import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from '../dialogs/dialogs.module';
import { FilePreviewWithActionsComponent } from './file-preview-with-actions/file-preview-with-actions.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';

@NgModule({
  declarations: [FilePreviewComponent, FilePreviewWithActionsComponent],
  imports: [CommonModule, DialogsModule, MatButtonModule, MatIconModule],
  exports: [FilePreviewComponent, FilePreviewWithActionsComponent],
})
export class FilesModule {}
