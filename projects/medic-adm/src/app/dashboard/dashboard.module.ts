import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { CardsModule } from '../shared/components/cards/cards.module';
import { DashboardInitComponent } from './components/dashboard-init/dashboard-init.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { SalesLinesChartComponent } from './components/sales-lines-chart/sales-lines-chart.component';
import { TotalExamsPieChartComponent } from './components/total-exams-pie-chart/total-exams-pie-chart.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TotalCardsComponent } from './components/total-cards/total-cards.component';

@NgModule({
  declarations: [
    PieChartComponent,
    DashboardInitComponent,
    TotalExamsPieChartComponent,
    SalesLinesChartComponent,
    TotalCardsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GoogleChartsModule,
    CardsModule,
  ],
})
export class DashboardModule {}
