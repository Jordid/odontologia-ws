import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
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
import { CreateExamFormComponent } from './components/create-exam-form/create-exam-form.component';
import { CreateOrderFormComponent } from './components/create-order-form/create-order-form.component';
import { FilesListContainerComponent } from './components/files-list-container/files-list-container.component';
import { LoadedImagePreviewComponent } from './components/loaded-image-preview/loaded-image-preview.component';
import { OrdersInitComponent } from './components/orders-init/orders-init.component';
import { OrdersMenuPanelComponent } from './components/orders-menu-panel/orders-menu-panel.component';
import { OrdersTableMenuComponent } from './components/orders-table-menu/orders-table-menu.component';
import { OrdersTableWithMenuComponent } from './components/orders-table-with-menu/orders-table-with-menu.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { OrderRoutingModule } from './order-routing.module';
import { ExamCategoryPipe } from './pipes/exam-category.pipe';
import { RadiographyTypePipe } from './pipes/radiography-type.pipe';
@NgModule({
  declarations: [
    CreateExamFormComponent,
    CreateOrderFormComponent,
    ExamCategoryPipe,
    FilesListContainerComponent,
    LoadedImagePreviewComponent,
    OrdersComponent,
    OrdersInitComponent,
    OrdersMenuPanelComponent,
    OrdersTableComponent,
    OrdersTableMenuComponent,
    OrdersTableWithMenuComponent,
    RadiographyTypePipe,
    UploadImagesComponent,
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
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    UserModule,
    SharedMedicsModule,
    PipesModule,
    DialogsModule,
    SearchersModule,
    AutocompletesModule,
  ],
})
export class OrdersModule {}
