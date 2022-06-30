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
import { LayoutModule } from '../layout/layout.module';
import { FilesModule } from '../shared/components/files/files.module';
import { SearchersModule } from '../shared/components/searchers/searchers.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CreateStudyFormComponent } from './components/create-study-form/create-study-form.component';
import { StudiesInitComponent } from './components/studies-init/studies-init.component';
import { StudiesMenuPanelComponent } from './components/studies-menu-panel/studies-menu-panel.component';
import { StudiesTableMenuComponent } from './components/studies-table-menu/studies-table-menu.component';
import { StudiesTableWithMenuComponent } from './components/studies-table-with-menu/studies-table-with-menu.component';
import { StudiesTableComponent } from './components/studies-table/studies-table.component';
import { StudiesComponent } from './components/studies/studies.component';
import { StudyRoutingModule } from './study-routing.module';

@NgModule({
  declarations: [
    StudiesInitComponent,
    StudiesComponent,
    StudiesMenuPanelComponent,
    StudiesTableWithMenuComponent,
    StudiesTableMenuComponent,
    StudiesTableComponent,
    CreateStudyFormComponent,
  ],
  imports: [
    CommonModule,
    FilesModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    PipesModule,
    ReactiveFormsModule,
    SearchersModule,
    StudyRoutingModule,
  ],
  exports: [CreateStudyFormComponent],
})
export class StudiesModule {}
