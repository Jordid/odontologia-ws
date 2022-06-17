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
  observation: string =
    'Where can I get some There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,';

  gotToEditor(): void {
    this.goToEditorClicked.emit(true);
  }
}
