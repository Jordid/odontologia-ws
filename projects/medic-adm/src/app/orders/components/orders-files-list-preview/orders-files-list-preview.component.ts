import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IExam } from '../../types/exam.interface';

@Component({
  selector: 'odo-orders-files-list-preview',
  templateUrl: './orders-files-list-preview.component.html',
  styleUrls: ['./orders-files-list-preview.component.scss'],
})
export class OrdersFilesListPreviewComponent {
  @Input() exams: IExam[];

  constructor(private router: Router) {}

  onGoToEditorClickedChange(clicked: boolean, exam: IExam): void {
    if (clicked === true) {
      this.router.navigate([
        `/admin/clients/${exam?.order?.clientId}/orders/${exam?.orderId}/details/radiography/${exam?.radiographyId}`,
      ]);
    }
  }
}
