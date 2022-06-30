import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudyRoutingModule } from './study-routing.module';
import { StudiesInitComponent } from './components/studies-init/studies-init.component';
import { StudiesComponent } from './components/studies/studies.component';

@NgModule({
  declarations: [
    StudiesInitComponent,
    StudiesComponent
  ],
  imports: [CommonModule, StudyRoutingModule],
})
export class StudiesModule {}
