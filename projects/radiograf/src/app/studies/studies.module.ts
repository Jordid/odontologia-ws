import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { StudiesInitComponent } from './components/studies-init/studies-init.component';
import { StudiesComponent } from './components/studies/studies.component';
import { StudyRoutingModule } from './study-routing.module';

@NgModule({
  declarations: [StudiesInitComponent, StudiesComponent],
  imports: [CommonModule, StudyRoutingModule, LayoutModule],
})
export class StudiesModule {}
