import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../../services/orders.service';
import { IFile } from '../../../types/file.interface';
import { ICreateStudy, IStudy } from '../../../types/studio.interface';
import { IProgressInfo } from '../../create-exam-form/create-exam-form.component';
import { CreateStudioForm } from './create-studio-form.class';

@Component({
  selector: 'odo-create-studio-form',
  templateUrl: './create-studio-form.component.html',
  styleUrls: ['./create-studio-form.component.scss'],
})
export class CreateStudioFormComponent
  extends CreateStudioForm
  implements OnInit
{
  @Input() orderId: number;
  @Input() radiographyId: number;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() sentCreateStudy = new EventEmitter<boolean>();

  fileList: File[];
  progressInfo: IProgressInfo;
  uploadedError: boolean = false;
  fileFormatsArray: string[];

  private subs: Subscription = new Subscription();

  constructor(private ordersService: OrdersService) {
    super();
  }

  ngOnInit(): void {
    this.subs.add(this.ordersService.getStudy$().subscribe(this.getStudy));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onCancel(): void {
    this.cancel.emit(true);
  }

  public onSubmit(): void {
    if (this.validatedForm && this.fileList?.length > 0) {
      this.submitting = true;
    }
  }

  onSelectedFilesOutChange(fileList: File[]): void {
    this.fileList = fileList;
  }

  onUploadedFileChange(uploadedFile: IFile): void {
    this.submitting = false;
    if (
      uploadedFile?.storageId &&
      this.validatedForm &&
      this.fileList?.length > 0 &&
      this.orderId &&
      this.radiographyId
    ) {
      this.submitting = true;
      const createStudyJson: ICreateStudy = {
        description: this.observation.value,
        storageId: uploadedFile?.storageId,
        type: 'RICKETTS',
      };
      this.ordersService.createStudy(
        this.orderId,
        this.radiographyId,
        createStudyJson
      );
    }
  }

  private getStudy = (study: IStudy): void => {
    if (this.submitting) {
      if (study) {
        this.sentCreateStudy.emit(true);
      }
      this.submitting = false;
    }
  };
}
