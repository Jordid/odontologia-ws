import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'odo-medics-table-menu',
  templateUrl: './medics-table-menu.component.html',
  styleUrls: ['./medics-table-menu.component.scss'],
})
export class MedicsTableMenuComponent {
  constructor(private router: Router) {}

  public onQueryParamsChange(queryParams: Params): void {
    if (queryParams['pageNumber']) {
      queryParams['pageNumber'] = 1;
    }
    this.router.navigate([], { queryParams });
  }
}
