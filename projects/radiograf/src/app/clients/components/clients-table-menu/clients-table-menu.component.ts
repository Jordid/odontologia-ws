import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'odo-clients-table-menu',
  templateUrl: './clients-table-menu.component.html',
  styleUrls: ['./clients-table-menu.component.scss'],
})
export class ClientsTableMenuComponent {
  constructor(private router: Router) {}

  public onQueryParamsChange(queryParams: Params): void {
    if (queryParams['pageNumber']) {
      queryParams['pageNumber'] = 1;
    }
    this.router.navigate([], { queryParams });
  }
}
