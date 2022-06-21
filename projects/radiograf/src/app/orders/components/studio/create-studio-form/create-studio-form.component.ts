import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() cancel = new EventEmitter<boolean>();

  fileList: File[];
  progressInfo: IProgressInfo;
  uploadedError: boolean = false;
  fileFormatsArray: string[];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.cancel.emit(true);
  }

  public onSubmit(): void {
    /*if (this.validatedForm && this.fileList?.length > 0) {
      this.uploadFile(this.fileList);
    }*/
  }

  onFileListChange(fileList: File[]): void {
    this.fileList = fileList;
  }
}
