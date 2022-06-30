import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderStatusEnum } from '../../../orders/types/order-status.enum';
import { StudiesService } from '../../services/studies.service';
import { StudyDataSource } from '../../types/study-datasource';
import { IStudy } from '../../types/study.interface';

@Component({
  selector: 'odo-studies-table',
  templateUrl: './studies-table.component.html',
  styleUrls: ['./studies-table.component.scss'],
})
export class StudiesTableComponent implements OnInit, AfterViewInit {
  OrderStatusEnum = OrderStatusEnum;
  private subs: Subscription = new Subscription();

  @Input() showPaginator = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<IStudy>;
  public dataSource: StudyDataSource = null;
  params: Params;

  public displayedColumns: string[] = [
    'studyCode',
    'description',
    'actions',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studiesService: StudiesService
  ) {}

  ngOnInit(): void {
    this.dataSource = new StudyDataSource(
      this.route,
      this.router,
      this.studiesService
    );
    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    const params: Params = {};
    if (queryParamMap?.keys?.length) {
      for (const key of queryParamMap.keys) {
        params[key] = queryParamMap.get(key);
      }
    }
    this.params = params;
  };

  deleteStudy(study: IStudy): void {
    console.log('Delete study: ', study);
  }
}
