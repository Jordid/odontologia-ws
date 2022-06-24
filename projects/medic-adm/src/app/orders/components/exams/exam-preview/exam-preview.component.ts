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
  observation: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.observation = this.exam?.description;/* StringUtils.cutAddingThreePointsAtEnd(
      this.exam?.description,
      120
    );*/
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
