import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ComponentsModule } from '../shared/components/components.module';
import { DialogsModule } from '../shared/components/dialogs/dialogs.module';
import { SharedMedicsModule } from '../shared/components/shared-medics/shared-medics.module';
import { SpinnersModule } from '../shared/components/spinners/spinners.module';
import { UserModule } from '../shared/components/user/user.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CreateMedicFormComponent } from './components/create-medic-form/create-medic-form.component';
import { MedicsInitComponent } from './components/medics-init/medics-init.component';
import { MedicsTableMenuComponent } from './components/medics-table-menu/medics-table-menu.component';
import { MedicsTableWithMenuComponent } from './components/medics-table-with-menu/medics-table-with-menu.component';
import { MedicsTableComponent } from './components/medics-table/medics-table.component';
import { MedicsComponent } from './components/medics/medics.component';
import { MenuPanelComponent } from './components/medics/menu-panel/menu-panel.component';
import { UpdateMedicFormComponent } from './components/update-medic-form/update-medic-form.component';
import { MedicsRoutingModule } from './medic-routing.module';
@NgModule({
  declarations: [
    MedicsInitComponent,
    MedicsTableComponent,
    MedicsComponent,
    CreateMedicFormComponent,
    MenuPanelComponent,
    MedicsTableMenuComponent,
    MedicsTableWithMenuComponent,
    UpdateMedicFormComponent,
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    UserModule,
    SharedMedicsModule,
    PipesModule,
    DialogsModule,
    ComponentsModule,
    SpinnersModule,
  ],
})
export class MedicsModule {}
