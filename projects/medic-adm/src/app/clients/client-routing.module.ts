import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsInitComponent } from './components/clients-init/clients-init.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateClientFormComponent } from './components/create-client-form/create-client-form.component';
import { UpdateClientFormComponent } from './components/update-client-form/update-client-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsInitComponent,
    children: [
      {
        path: '',
        component: ClientsComponent,
      },
      {
        path: 'create',
        component: CreateClientFormComponent,
      },
      {
        path: ':clientId/update',
        component: UpdateClientFormComponent,
      },

      {
        path: ':clientId/orders',
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
export class ClientRoutingModule {}
