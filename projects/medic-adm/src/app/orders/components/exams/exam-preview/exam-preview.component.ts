import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmationDialogData } from '../../../../core/types/dialogs/confirmation-dialog-data';
import { OdoDialogConfig } from '../../../../core/types/dialogs/odo-dialog-config';
import { ExamPreviewDialogComponent } from '../../../../shared/components/dialogs/exam-preview-dialog/exam-preview-dialog.component';
import { StringUtils } from '../../../../shared/utils/StringUtils';
import { IExam } from '../../../types/exam.interface';

@Component({
  selector: 'odo-exam-preview',
  templateUrl: './exam-preview.component.html',
  styleUrls: ['./exam-preview.component.scss'],
})
export class ExamPreviewComponent implements OnChanges {
  @Input() exam: IExam;
  @Output() goToEditorClicked = new EventEmitter<boolean>();
  @Output() viewDetailsClicked = new EventEmitter<boolean>();
  observation: string =
    'Where can I get some There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,';

  constructor(private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.observation = StringUtils.cutAddingThreePointsAtEnd(
      this.observation,
      120
    );
  }

  private subs: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showPreview(): void {
    const data: ConfirmationDialogData = {
      data: this.exam?.imageUrl,
    };
    const dialogConfig = new OdoDialogConfig<ConfirmationDialogData>();
    dialogConfig.data = data;
    dialogConfig.width = '750px';

    this.dialog.open<
      ExamPreviewDialogComponent,
      ConfirmationDialogData,
      string[]
    >(ExamPreviewDialogComponent, dialogConfig);
  }

  gotToEditor(): void {
    this.goToEditorClicked.emit(true);
  }

  viewDetails(): void {
    this.viewDetailsClicked.emit(true);
  }
}
