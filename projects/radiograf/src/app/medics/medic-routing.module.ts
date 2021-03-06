import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicFormComponent } from './components/create-medic-form/create-medic-form.component';
import { UpdateMedicFormComponent } from './components/update-medic-form/update-medic-form.component';
import { MedicsInitComponent } from './components/medics-init/medics-init.component';
import { MedicsComponent } from './components/medics/medics.component';

const routes: Routes = [
  {
    path: '',
    component: MedicsInitComponent,
    children: [
      {
        path: '',
        component: MedicsComponent,
      },
      {
        path: 'create',
        component: CreateMedicFormComponent,
      },
      {
        path: ':doctorId/update',
        component: UpdateMedicFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicsRoutingModule {}
