import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExam } from '../../types/exam.interface';

@Component({
  selector: 'odo-orders-files-list-preview',
  templateUrl: './orders-files-list-preview.component.html',
  styleUrls: ['./orders-files-list-preview.component.scss'],
})
export class OrdersFilesListPreviewComponent {
  private clientId: string = this.route.snapshot.paramMap.get('clientId');

  @Input() exams: IExam[];
  @Output() addStudioClicked = new EventEmitter<number>();
  @Output() deleteExamClicked = new EventEmitter<IExam>();
  @Output() viewStudiesClicked = new EventEmitter<number>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  onGoToEditorClickedChange(clicked: boolean, exam: IExam): void {
    if (clicked === true) {
      let route;
      if (this.clientId) {
        route = `/admin/clients/${exam?.order?.clientId}/orders/${exam?.orderId}/radiography/${exam?.radiographyId}`;
      } else {
        route = `/admin/orders/${exam?.orderId}/radiography/${exam?.radiographyId}`;
      }
      if (route) {
        this.router.navigate([route]);
      }
    }
  }

  onAddStudioClickedChange(id: number): void {
    this.addStudioClicked.emit(id);
  }
  onDeleteStudioClickedChange(exam: IExam): void {
    this.deleteExamClicked.emit(exam);
  }
  onViewStudiesClickedChange(id: number): void {
    this.viewStudiesClicked.emit(id);
  }
}
