import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { ExamsInitComponent } from './components/exams-init/exams-init.component';
import { ExamsComponent } from './components/exams/exams.component';
import { ExamRoutingModule } from './exam-routing.module';

@NgModule({
  declarations: [ExamsInitComponent, ExamsComponent],
  imports: [CommonModule, ExamRoutingModule, LayoutModule],
})
export class ExamsModule {}
