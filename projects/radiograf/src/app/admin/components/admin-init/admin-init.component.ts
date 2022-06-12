import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, shareReplay, Subscription } from 'rxjs';
import { OAuthStorageService } from '../../../auth/services/o-auth-storage.service';
import { ProgressBarService } from '../../../shared/services/progress-bar/progress-bar.service';
@Component({
  selector: 'odo-admin-init',
  templateUrl: './admin-init.component.html',
  styleUrls: ['./admin-init.component.scss'],
})
export class AdminInitComponent implements OnInit, OnDestroy {
  public progressBar$: Observable<boolean> = this.progressBarService
    .getProgressBar$()
    .pipe(shareReplay(1));

  showProgressBar: boolean = false;

  @ViewChild('drawer') sidenav!: MatSidenav;
  avatarUrl: string;
  userName: string;
  email: string;

  /*   public LogoWorkards = ImagesConfig.workards;
  public companyID: number; */

  /*   private oAuth: OAuth = this.oAuthStorageService.get();
   */
  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
    .pipe(map((result) => result.matches));

  /*  private userRole$: Observable<UserRole> = this.workersService
    .getUserRole$()
    .pipe(shareReplay(1)); */
  /*   public userRole: UserRole;
   */
  private subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private oauthStorageService: OAuthStorageService,
    /*   private workersService: WorkersService, */ /*     private oAuthStorageService: OAuthStorageService */
    private progressBarService: ProgressBarService
  ) {}

  ngOnInit(): void {
    const user = this.oauthStorageService.getUser;
    if (user) {
      this.avatarUrl = user?.avatarUrl;
      this.userName = user?.name;
      this.email = user?.email;
    }
    //this.subs.add(this.userRole$.subscribe(this.getUserRole));
    this.subs.add(this.route.paramMap.subscribe(this.getParamMap));
    this.subs.add(this.progressBar$.subscribe(this.getProgressBar));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  toggle() {
    this.sidenav.toggle();
  }

  private getParamMap = (paramMap: ParamMap): void => {
    /* if (paramMap.has('companyID') && this.oAuth?.userId) {
      this.companyID = parseInt(paramMap.get('companyID'));
      this.workersService.getUserRole(this.companyID, this.oAuth.userId);
    } */
  };

  /* private getUserRole = (userRole: UserRole): void => {
    if (userRole) {
      this.userRole = userRole;
    }
  }; */

  private getProgressBar = (status: boolean): void => {
    this.showProgressBar = status;
  };
}
