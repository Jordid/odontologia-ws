import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { IExam } from '../../types/exam.interface';
import { IFile } from '../../types/file.interface';
import { ICreateExam } from '../../types/order.interface';
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

  constructor(private router: Router, private ordersService: OrdersService) {
    super();
  }

  ngOnInit(): void {
    this.subs.add(this.ordersService.getExam$().subscribe(this.getExam));
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
      //console.log('fileList: ', this.fileList);
      //console.log('form: ', this.createRadiographyForm.getRawValue());
      this.uploadFile(this.fileList);

      /* this.prepateFormToSend();
      this.clientsService.createClient(this.createClientForm.getRawValue()); */
    }
  }

  uploadFile(fileList: File[]): void {
    if (fileList?.length < 1) {
      return;
    }
    for (const file of fileList) {
      console.log('file: ', file);

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

            console.log('responseImage: ', event);
            this.uploaded = true;

            this.createExam();

            //this.message.push(msg);
            // this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfo.value = 0;
          this.uploaded = false;
          this.uploadedError = true;
          //this.fileInfos = this.uploadService.getFiles();
        },
      });
    }
  }

  createExam(): void {
    if (this.validatedForm && this.uploadedFile) {
      const createExamJson = {
        typeId: 1,
        value: 17,
        storageId: this.uploadedFile.storageId,
      } as ICreateExam;
      this.submitting = true;
      this.ordersService.createExam(this.orderId, createExamJson);
    }
  }

  private getExam = (exam: IExam): void => {
    console.log('Created exam. ', exam);
    this.sentCreateExam.emit(true);
    this.submitting = false;
  };
}
