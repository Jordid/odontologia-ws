import { Component, Input } from '@angular/core';
import { IExam } from '../../types/exam.interface';

@Component({
  selector: 'odo-orders-files-list-preview',
  templateUrl: './orders-files-list-preview.component.html',
  styleUrls: ['./orders-files-list-preview.component.scss'],
})
export class OrdersFilesListPreviewComponent {
  @Input() exams: IExam[];
}
