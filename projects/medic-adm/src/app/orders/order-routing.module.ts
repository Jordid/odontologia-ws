import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthGuard } from '../core/guards/o-auth/o-auth/o-auth.guard';
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
        canActivate: [OAuthGuard],
      },
      {
        path: ':orderId',
        component: OrderDetailsComponent,
        canActivate: [OAuthGuard],
      },
      {
        path: ':orderId/radiography/:radiographyId',
        component: RadiographyEditorComponent,
        canActivate: [OAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
