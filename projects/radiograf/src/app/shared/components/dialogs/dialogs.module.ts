import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ExamPreviewDialogComponent } from './exam-preview-dialog/exam-preview-dialog.component';

@NgModule({
  declarations: [ConfirmationDialogComponent, ExamPreviewDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [ExamPreviewDialogComponent],
})
export class DialogsModule {}
