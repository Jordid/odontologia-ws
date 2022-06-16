import { Component } from '@angular/core';

@Component({
  selector: 'odo-total-exams-pie-chart',
  templateUrl: './total-exams-pie-chart.component.html',
  styleUrls: ['./total-exams-pie-chart.component.scss'],
})
export class TotalExamsPieChartComponent {
  title = 'Population (in millions)';
  type = 'BarChart';
  data = [
     ["2012", 900, 390],
     ["2013", 1000, 400],
     ["2014", 1170, 440],
     ["2015", 1250, 480],
     ["2016", 1530, 540]
  ];
  columnNames = ['Year', 'Asia','Europe'];
  options = {
     hAxis: {
        title: 'Year'
     },
     vAxis:{
        minValue:0
     },
     isStacked:true,
     backgroundColor: 'yellow',
     colors:['blue', 'green']
  };
  width = 550;
  height = 400;
}
