import { Component, Input } from '@angular/core';

@Component({
  selector: 'odo-no-results-display-in-table',
  templateUrl: './no-results-display-in-table.component.html',
  styleUrls: ['./no-results-display-in-table.component.scss'],
})
export class NoResultsDisplayInTableComponent {
  @Input() message: string = 'No hay resutados para mostrar';
}
