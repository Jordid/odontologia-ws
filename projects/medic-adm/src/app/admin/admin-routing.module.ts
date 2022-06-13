import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInitComponent } from './components/admin-init/admin-init.component';
import { OAuthGuard } from '../core/guards/o-auth/o-auth/o-auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminInitComponent,
    canActivate: [OAuthGuard],
    children: [

      {
        path: 'clients',
        canLoad: [OAuthGuard],
        loadChildren: () =>
          import('../clients/clients.module').then((m) => m.ClientsModule),
      },
      {
        path: 'orders',
        canLoad: [OAuthGuard],
        loadChildren: () =>
          import('../orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
