import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';
@Component({
  selector: 'odo-orders-table-menu',
  templateUrl: './orders-table-menu.component.html',
  styleUrls: ['./orders-table-menu.component.scss'],
})
export class OrdersTableMenuComponent {
  constructor(private router: Router) {}

  public onQueryParamsChange(queryParams: Params): void {
    if (queryParams['pageNumber']) {
      queryParams['pageNumber'] = 1;
    }
    this.router.navigate([], { queryParams });
  }
}
