import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { ConfirmationDialogData } from '../../../core/types/dialogs/confirmation-dialog-data';
import { OdoDialogConfig } from '../../../core/types/dialogs/odo-dialog-config';
import { OrdersService } from '../../services/orders.service';
import { ExamCategoryEnum } from '../../types/exam-category.enum';
import { IExam } from '../../types/exam.interface';
import { IFile } from '../../types/file.interface';
import { ICreateExam } from '../../types/order.interface';
import { IRadiographyType } from '../../types/radiography-type.interface';
import { OdontogramDialogComponent } from '../odontogram/odontogram-dialog/odontogram-dialog.component';
import { CreateExamForm } from './create-exam-form.class';

export interface IProgressInfo {
  value: any;
  fileName: string;
}

@Component({
  selector: 'odo-create-exam-form',
  templateUrl: './create-exam-form.component.html',
  styleUrls: ['./create-exam-form.component.scss'],
})
export class CreateExamFormComponent
  extends CreateExamForm
  implements OnInit, OnDestroy
{
  @Input() orderId: number;
  @Output() sentCreateExam = new EventEmitter<boolean>();
  private subs: Subscription = new Subscription();

  showCrearteExamButton = false;
  fileList: File[];
  progressInfo: IProgressInfo;
  uploaded: boolean = false;
  uploadedError: boolean = false;
  uploadedFile: IFile;
  exams: IExam[];
  piecesCodeList: string[] = [];
  piecesCodeText: string;
  radiographyTypes: IRadiographyType[];

  constructor(private ordersService: OrdersService, private dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.subs.add(this.ordersService.getExam$().subscribe(this.getExam));
    this.subs.add(
      this.ordersService
        .getRadiographyTypes$()
        .subscribe(this.getRadiographyTypes)
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onFileListChange(fileList: File[]): void {
    this.fileList = fileList;
  }

  cancel(): void {
    this.sentCreateExam.emit(true);
  }

  public onSubmit(): void {
    if (this.validatedForm && this.fileList?.length > 0) {
      this.uploadFile(this.fileList);
    }
  }

  uploadFile(fileList: File[]): void {
    if (fileList?.length < 1) {
      return;
    }
    for (const file of fileList) {
      this.progressInfo = { value: 0, fileName: file.name };
      this.uploadedError = false;
      this.ordersService.uploadFileAux(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfo.value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const array = event?.body?.result;
            if (array?.length > 0) {
              this.uploadedFile = array[0];
            }
            this.uploaded = true;
            this.createExam();
          }
        },
        error: (err: any) => {
          this.progressInfo.value = 0;
          this.uploaded = false;
          this.uploadedError = true;
        },
      });
    }
  }

  onAddPieces(): void {
    this.openOdontogramDialog();
  }

  openOdontogramDialog(): void {
    const data: ConfirmationDialogData = {
      data: this.piecesCodeList,
    };
    const dialogConfig = new OdoDialogConfig<ConfirmationDialogData>();
    dialogConfig.data = data;
    dialogConfig.width = '750px';

    const dialog = this.dialog.open<
      OdontogramDialogComponent,
      ConfirmationDialogData,
      string[]
    >(OdontogramDialogComponent, dialogConfig);
    this.subs.add(
      dialog.afterClosed().subscribe((result) => {
        this.piecesCodeList = result;
      })
    );
  }

  getPiecesCodeText(): string {
    let piecesCodeText = '';
    if (this.piecesCodeList?.length > 0) {
      let cont = 0;
      const length = this.piecesCodeList.length;
      for (const code of this.piecesCodeList) {
        if (code) {
          if (cont < length) {
            if (piecesCodeText.length < 1) {
              piecesCodeText = code;
            } else {
              piecesCodeText = piecesCodeText + ', ' + code;
            }
          } else {
            piecesCodeText = piecesCodeText + ' ' + code;
          }
        }
        cont++;
      }
      if (piecesCodeText.length > 0) {
        piecesCodeText = '[' + piecesCodeText + ']';
      }
    }
    return piecesCodeText;
  }

  createExam(): void {
    console.log('validatedForm: ', this.createExamForm);

    if (this.validatedForm && this.uploadedFile) {
      let categoryType: IRadiographyType = null;
      if (this.examType.value) {
        categoryType = this.examType.value;
      }
      const createExamJson: ICreateExam = {
        description: this.observation.value,
        isAddional: this.isAdditional.value,
        storageId: this.uploadedFile.storageId,
        teeth:
          this.piecesCodeList?.length > 0
            ? this.piecesCodeList.toString()
            : null,
        typeId: categoryType?.typeId,
        price: this.price.value,
      };
      this.submitting = true;
      this.ordersService.createExam(this.orderId, createExamJson);
    }
  }

  private getExam = (exam: IExam): void => {
    if (this.submitting) {
      if (exam) {
        console.log('Created exam. ', exam);
        this.sentCreateExam.emit(true);
      }
      this.submitting = false;
    }
  };

  private getRadiographyTypes = (
    radiographyTypes: IRadiographyType[]
  ): void => {
    this.radiographyTypes =
      radiographyTypes?.length > 0 ? radiographyTypes : [];
  };

  public onExamCategoryChange(event: MatSelectChange): void {
    if (event?.value === ExamCategoryEnum.RADIOGRAFHY) {
      this.ordersService.getRadiographyTypes();
    }
  }
}
