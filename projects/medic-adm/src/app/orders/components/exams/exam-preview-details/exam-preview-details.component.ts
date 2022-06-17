import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExam } from '../../../types/exam.interface';

@Component({
  selector: 'odo-exam-preview-details',
  templateUrl: './exam-preview-details.component.html',
  styleUrls: ['./exam-preview-details.component.scss'],
})
export class ExamPreviewDetailsComponent {
  @Input() exam: IExam;
  @Output() goToEditorClicked = new EventEmitter<boolean>();

  gotToEditor(): void {
    this.goToEditorClicked.emit(true);
  }
}
