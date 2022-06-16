import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AutocompletesModule } from '../shared/components/autocompletes/autocompletes.module';
import { CanvasModule } from '../shared/components/canvas/canvas.module';
import { DialogsModule } from '../shared/components/dialogs/dialogs.module';
import { FilesModule } from '../shared/components/files/files.module';
import { SearchersModule } from '../shared/components/searchers/searchers.module';
import { SharedMedicsModule } from '../shared/components/shared-medics/shared-medics.module';
import { SpinnersModule } from '../shared/components/spinners/spinners.module';
import { UserModule } from '../shared/components/user/user.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CreateExamFormComponent } from './components/exams/create-exam-form/create-exam-form.component';
import { CreateOrderFormComponent } from './components/create-order-form/create-order-form.component';
import { ExamPreviewComponent } from './components/exams/exam-preview/exam-preview.component';
import { LoadedImagePreviewComponent } from './components/loaded-image-preview/loaded-image-preview.component';
import { OderPatientAndMedicPreviewComponent } from './components/oder-patient-and-medic-preview/oder-patient-and-medic-preview.component';
import { MolarPieceComponent } from './components/odontogram/molar-piece/molar-piece.component';
import { OdontogramDialogComponent } from './components/odontogram/odontogram-dialog/odontogram-dialog.component';
import { OdontogramComponent } from './components/odontogram/odontogram/odontogram.component';
import { PiecesBlockComponent } from './components/odontogram/pieces-block/pieces-block.component';
import { ToothPieceComponent } from './components/odontogram/tooth-piece/tooth-piece.component';
import { OrderDetailsComponent } from './components/order-details/order-details/order-details.component';
import { OrdersFilesListPreviewComponent } from './components/exams/orders-files-list-preview/orders-files-list-preview.component';
import { OrdersInitComponent } from './components/orders-init/orders-init.component';
import { OrdersMenuPanelComponent } from './components/orders-menu-panel/orders-menu-panel.component';
import { OrdersTableMenuComponent } from './components/orders-table-menu/orders-table-menu.component';
import { OrdersTableWithMenuComponent } from './components/orders-table-with-menu/orders-table-with-menu.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RadiographyEditorComponent } from './components/exams/radiography-editor/radiography-editor.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { OrderRoutingModule } from './order-routing.module';
import { ExamCategoryPipe } from './pipes/exam-category.pipe';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { RadiographyTypePipe } from './pipes/radiography-type.pipe';
import { ExamDetailsComponent } from './components/exams/exam-details/exam-details.component';

@NgModule({
  declarations: [
    CreateExamFormComponent,
    CreateOrderFormComponent,
    ExamCategoryPipe,
    ExamPreviewComponent,
    LoadedImagePreviewComponent,
    MolarPieceComponent,
    OderPatientAndMedicPreviewComponent,
    OdontogramComponent,
    OdontogramDialogComponent,
    OrderDetailsComponent,
    OrdersComponent,
    OrdersFilesListPreviewComponent,
    OrdersInitComponent,
    OrdersMenuPanelComponent,
    OrdersTableComponent,
    OrdersTableMenuComponent,
    OrdersTableWithMenuComponent,
    OrderStatusPipe,
    PiecesBlockComponent,
    RadiographyEditorComponent,
    RadiographyTypePipe,
    ToothPieceComponent,
    UploadImagesComponent,
    ExamDetailsComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    SharedMedicsModule,
    PipesModule,
    DialogsModule,
    SearchersModule,
    AutocompletesModule,
    FilesModule,
    CanvasModule,
    SpinnersModule,
  ],
})
export class OrdersModule {}
