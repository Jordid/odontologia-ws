import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthGuard } from '../core/guards/o-auth/o-auth/o-auth.guard';
import { StudiesInitComponent } from './components/studies-init/studies-init.component';
import { StudiesComponent } from './components/studies/studies.component';

const routes: Routes = [
  {
    path: '',
    component: StudiesInitComponent,
    children: [
      {
        path: '',
        component: StudiesComponent,
        canActivate: [OAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyRoutingModule {}
