import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExamsInitComponent } from './components/exams-init/exams-init.component';
import { ExamsComponent } from './components/exams/exams.component';
import { ExamRoutingModule } from './exam-routing.module';

@NgModule({
  declarations: [ExamsInitComponent, ExamsComponent],
  imports: [CommonModule, ExamRoutingModule],
})
export class ExamsModule {}
