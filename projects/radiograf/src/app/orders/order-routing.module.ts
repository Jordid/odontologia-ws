import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthGuard } from '../core/guards/o-auth/o-auth/o-auth.guard';
import { CreateOrderFormComponent } from './components/create-order-form/create-order-form.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
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
        canActivate: [OAuthGuard],
      },
      {
        path: 'create',
        component: CreateOrderFormComponent,
        canActivate: [OAuthGuard],
      },
      {
        path: ':orderId',
        component: OrderDetailsComponent,
        canActivate: [OAuthGuard],
      },
      {
        path: ':orderId/edit-order',
        component: EditOrderComponent,
        canActivate: [OAuthGuard],
      },
      {
        path: ':orderId/exams',
        loadChildren: () =>
          import('../exams/exams.module').then((m) => m.ExamsModule),
        canLoad: [OAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
