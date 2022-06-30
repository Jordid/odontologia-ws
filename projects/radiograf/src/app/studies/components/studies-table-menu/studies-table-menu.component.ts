import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'odo-studies-table-menu',
  templateUrl: './studies-table-menu.component.html',
  styleUrls: ['./studies-table-menu.component.scss'],
})
export class StudiesTableMenuComponent {
  constructor(private router: Router) {}

  public onQueryParamsChange(queryParams: Params): void {
    if (queryParams['pageNumber']) {
      queryParams['pageNumber'] = 1;
    }
    this.router.navigate([], { queryParams });
  }
}
