import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from '../dialogs/dialogs.module';
import { FilePreviewWithActionsComponent } from './file-preview-with-actions/file-preview-with-actions.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { LoadedFilePreviewComponent } from './loaded-file-preview/loaded-file-preview.component';
import { SelectedFileListPreviewComponent } from './selected-file-list-preview/selected-file-list-preview.component';
import { SelectorFileInputComponent } from './selector-file-input/selector-file-input.component';
import { UploadFilesContainerComponent } from './upload-files-container/upload-files-container.component';
import { UploadStudioFilesComponent } from './upload-studio-files/upload-studio-files.component';

@NgModule({
  declarations: [
    FilePreviewComponent,
    FilePreviewWithActionsComponent,
    LoadedFilePreviewComponent,
    SelectedFileListPreviewComponent,
    SelectorFileInputComponent,
    UploadFilesContainerComponent,
    UploadStudioFilesComponent,
  ],
  imports: [CommonModule, DialogsModule, MatButtonModule, MatIconModule],
  exports: [
    FilePreviewComponent,
    FilePreviewWithActionsComponent,
    SelectorFileInputComponent,
    UploadFilesContainerComponent,
    UploadStudioFilesComponent,
  ],
})
export class FilesModule {}
