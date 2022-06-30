import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '../layout/layout.module';
import { SearchersModule } from '../shared/components/searchers/searchers.module';
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
  ],
  imports: [
    CommonModule,
    StudyRoutingModule,
    LayoutModule,
    SearchersModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
})
export class StudiesModule {}
