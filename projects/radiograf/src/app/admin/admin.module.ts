import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedMedicsModule } from '../shared/components/shared-medics/shared-medics.module';
import { UserModule } from '../shared/components/user/user.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminInitComponent } from './components/admin-init/admin-init.component';
import { AdminSidenavListComponent } from './components/admin-sidenav-list/admin-sidenav-list.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';
@NgModule({
  declarations: [
    AdminInitComponent,
    AdminToolbarComponent,
    AdminSidenavListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    UserModule,
    SharedMedicsModule,
  ],
})
export class AdminModule {}
