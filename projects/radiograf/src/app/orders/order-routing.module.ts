import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderFormComponent } from './components/create-order-form/create-order-form.component';
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
        path: 'create',
        component: CreateOrderFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
