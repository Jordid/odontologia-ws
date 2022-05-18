import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { UserModule } from '../shared/components/user/user.module';
import { CreateMedicFormComponent } from './components/create-medic-form/create-medic-form.component';
import { MedicsInitComponent } from './components/medics-init/medics-init.component';
import { MedicsTableComponent } from './components/medics-table/medics-table.component';
import { MedicsComponent } from './components/medics/medics.component';
import { MenuPanelComponent } from './components/medics/menu-panel/menu-panel.component';
import { MedicsRoutingModule } from './medic-routing.module';
@NgModule({
  declarations: [
    MedicsInitComponent,
    MedicsTableComponent,
    MedicsComponent,
    CreateMedicFormComponent,
    MenuPanelComponent,
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    UserModule,
  ],
})
export class MedicsModule {}
