import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { DialogsModule } from '../shared/components/dialogs/dialogs.module';
import { SearchersModule } from '../shared/components/searchers/searchers.module';
import { UserModule } from '../shared/components/user/user.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientsInitComponent } from './components/clients-init/clients-init.component';
import { ClientsMenuPanelComponent } from './components/clients-menu-panel/clients-menu-panel.component';
import { ClientsTableMenuComponent } from './components/clients-table-menu/clients-table-menu.component';
import { ClientsTableWithMenuComponent } from './components/clients-table-with-menu/clients-table-with-menu.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateClientFormComponent } from './components/create-client-form/create-client-form.component';
import { UpdateClientFormComponent } from './components/update-client-form/update-client-form.component';

@NgModule({
  declarations: [
    ClientsInitComponent,
    ClientsComponent,
    CreateClientFormComponent,
    ClientsTableComponent,
    ClientsTableMenuComponent,
    ClientsTableWithMenuComponent,
    UpdateClientFormComponent,
    ClientsMenuPanelComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
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
    MatNativeDateModule,
    MatDatepickerModule,
    SearchersModule,
    UserModule,
    PipesModule,
    DialogsModule,
  ],
})
export class ClientsModule {}
