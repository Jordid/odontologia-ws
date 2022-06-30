import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthGuard } from '../core/guards/o-auth/o-auth/o-auth.guard';
import { ExamsInitComponent } from './components/exams-init/exams-init.component';
import { ExamsComponent } from './components/exams/exams.component';

const routes: Routes = [
  {
    path: '',
    component: ExamsInitComponent,
    children: [
      {
        path: '',
        component: ExamsComponent,
        canActivate: [OAuthGuard],
      },

      {
        path: ':examId/studies',
        loadChildren: () =>
          import('../studies/studies.module').then((m) => m.StudiesModule),
        canLoad: [OAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule {}
