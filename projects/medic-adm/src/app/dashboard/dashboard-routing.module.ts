import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInitComponent } from './components/dashboard-init/dashboard-init.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardInitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
