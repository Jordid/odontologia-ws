import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { OAuthGuard } from '@qaroni-core/guards/o-auth/o-auth/o-auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

   {
    path: 'clients',
    //canLoad: [OAuthGuard],
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'medics',
    //canLoad: [OAuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
 /* {
    path: 'invitations',
    canLoad: [OAuthGuard],
    loadChildren: () =>
      import('@qaroni-app/invitations/invitations.module').then(
        (m) => m.InvitationsModule
      ),
  },
  {
    path: 'profile',
    canLoad: [OAuthGuard],
    loadChildren: () =>
      import('@qaroni-app/profile/profile.module').then((m) => m.ProfileModule),
  },*/
  {
    path: '',
    //canLoad: [OAuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
