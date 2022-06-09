import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamViewerComponent } from './components/exam-viewer/exam-viewer.component';
import { OrderDetailsComponent } from './components/order-details/order-details/order-details.component';
import { OrdersInitComponent } from './components/orders-init/orders-init.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersInitComponent,
    children: [
      {
        path: '',
        component: OrdersComponent,
      },
      {
        path: ':clientId',
        component: OrdersComponent,
      },
      {
        path: ':orderId/details',
        component: OrderDetailsComponent,
      },
      {
        path: ':orderId/viewer',
        component: ExamViewerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
