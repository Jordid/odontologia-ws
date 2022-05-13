import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'odo-admin-sidenav-list',
  templateUrl: './admin-sidenav-list.component.html',
  styleUrls: ['./admin-sidenav-list.component.scss']
})
export class AdminSidenavListComponent  {
  /* @Input() companyID: number;
  @Input() userRole: UserRole; */

  //public currentDate: string = format(new Date(), 'yyyy-MM');

  get showCompanySideMenu(): boolean {
    return true;/* this.userRole?.role === UserRoleEnum.BASIC ||
      this.userRole?.role === UserRoleEnum.DEVELOPER
      ? true
      : false */;
  }

  public goToWidgets(): string[] {
    return [];//this.companyID ? [`/companies/${this.companyID}/widgets`] : null;
  }

  public goToChecks(): string[] {
    return [];//this.companyID ? [`/companies/${this.companyID}/checks`] : null;
  }

  public goToDowns(): string[] {
    return [];//this.companyID ? [`/companies/${this.companyID}/downs/list`] : null;
  }

  public goToVacations(): string[] {
    return [];/*this.companyID
      ? [`/companies/${this.companyID}/vacations/list`]
      : null;*/
  }

}
