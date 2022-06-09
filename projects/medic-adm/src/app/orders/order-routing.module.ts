import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details/order-details.component';
import { OrdersInitComponent } from './components/orders-init/orders-init.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RadiographyEditorComponent } from './components/radiography-editor/radiography-editor.component';

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
        path: ':orderId/details/radiography/:radiographyId',
        component: RadiographyEditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
