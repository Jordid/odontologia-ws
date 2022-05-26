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
import { AutocompletesModule } from '../shared/components/autocompletes/autocompletes.module';
import { DialogsModule } from '../shared/components/dialogs/dialogs.module';
import { SearchersModule } from '../shared/components/searchers/searchers.module';
import { SharedMedicsModule } from '../shared/components/shared-medics/shared-medics.module';
import { UserModule } from '../shared/components/user/user.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CreateOrderFormComponent } from './components/create-order-form/create-order-form.component';
import { OrdersInitComponent } from './components/orders-init/orders-init.component';
import { OrdersMenuPanelComponent } from './components/orders-menu-panel/orders-menu-panel.component';
import { OrdersTableMenuComponent } from './components/orders-table-menu/orders-table-menu.component';
import { OrdersTableWithMenuComponent } from './components/orders-table-with-menu/orders-table-with-menu.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [
    OrdersInitComponent,
    OrdersComponent,
    CreateOrderFormComponent,
    OrdersMenuPanelComponent,
    OrdersTableComponent,
    OrdersTableMenuComponent,
    OrdersTableWithMenuComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
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
    UserModule,
    SharedMedicsModule,
    PipesModule,
    DialogsModule,
    SearchersModule,
    AutocompletesModule,
  ],
})
export class OrdersModule {}
