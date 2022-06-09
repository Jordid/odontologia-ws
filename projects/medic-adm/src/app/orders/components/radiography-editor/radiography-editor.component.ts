import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { IExam } from '../../types/exam.interface';

@Component({
  selector: 'odo-radiography-editor',
  templateUrl: './radiography-editor.component.html',
  styleUrls: ['./radiography-editor.component.scss'],
})
export class RadiographyEditorComponent implements OnInit {
  private orderId: string = this.route.snapshot.paramMap.get('orderId');
  private radiographyId: string =
    this.route.snapshot.paramMap.get('radiographyId');

  private subs: Subscription = new Subscription();

  exam: IExam;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getExam$().subscribe(this.getExam));
    if (this.orderId && this.radiographyId) {
      this.ordersService.getExam(this.orderId, this.radiographyId);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getExam = (exam: IExam): void => {
    this.exam = exam;
    console.log("exam: ", exam);

  };
}
