import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'odo-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  title = 'Pacientes';
  type = 'PieChart';
  data = [
    ['Femenino', 1561561],
    ['Masculino', 1231215],
  ];
  columnNames = ['Género', 'Total'];
  options = {
    title: 'Pacientes por género',
    is3D: true,
    colors:['#ff878e', '#03c7ff']
  };
  width = 550;
  height = 400;
}
