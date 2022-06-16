import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../../services/orders.service';
import { IExam } from '../../../types/exam.interface';

@Component({
  selector: 'odo-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss'],
})
export class ExamDetailsComponent implements OnInit {
  private clientId: string = this.route.snapshot.paramMap.get('clientId');

  private orderId: string = this.route.snapshot.paramMap.get('orderId');
  private radiographyId: string =
    this.route.snapshot.paramMap.get('radiographyId');

  private subs: Subscription = new Subscription();

  exam: IExam;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getExam$().subscribe(this.getExam));
    if (this.orderId && this.radiographyId) {
      this.enableLoading();
      this.ordersService.getExam(this.orderId, this.radiographyId);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private enableLoading(): void {
    this.loading = true;
  }

  private disableLoading(): void {
    this.loading = false;
  }

  private getExam = (exam: IExam): void => {
    this.disableLoading();
    this.exam = exam;
  };

  onGoToEditorClickedChange(clicked: boolean, exam: IExam): void {
    if (clicked === true) {
      let route = null;
      if (this.clientId) {
        route = `/admin/clients/${exam?.order?.clientId}/orders/${exam?.orderId}/radiography-editor/${exam?.radiographyId}`;
      } else {
        route = `/admin/orders/${exam?.orderId}/radiography-editor/${exam?.radiographyId}`;
      }
      if (route) {
        this.router.navigate([route]);
      }
    }
  }
  onViewDetailsClickedChange(clicked: boolean, exam: IExam): void {
    if (clicked === true) {
      let route = null;
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
}
