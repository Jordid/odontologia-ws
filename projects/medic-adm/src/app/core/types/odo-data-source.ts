import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import {
  ActivatedRoute,
  convertToParamMap,
  ParamMap,
  Params,
  Router
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PaginationLinks } from './pagination-links';

export abstract class OdoDataSource<T = any> extends DataSource<T> {
  public sort: MatSort | undefined;
  public paginator: MatPaginator | undefined;

  public queryParams: Params;

  abstract paginationLinks$: Observable<PaginationLinks>;

  public subs: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
  }

  abstract override connect(
    collectionViewer: CollectionViewer
  ): Observable<readonly T[]>;

  disconnect(): void {
    this.subs.unsubscribe();
  }

  public initialization(): void {
    if (this.sort) {
      this.subs.add(this.sort.sortChange.subscribe(this.getSort));
    }

    if (this.paginator) {
      this.paginator.pageSize = 60;
      this.paginator.pageIndex = 0;
      this.subs.add(this.paginator.page.subscribe(this.getPage));
    }

    if (this.paginationLinks$) {
      this.subs.add(this.paginationLinks$.subscribe(this.getPaginationLinks));
    }

    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
  }

  abstract getQueryParamMap(queryParamMap: ParamMap): void;

  public queryParamMapActions(queryParamMap: ParamMap): void {
    const queryParams: Params = {};
    if (queryParamMap.keys.length) {
      for (const key of queryParamMap.keys) {
        queryParams[key] = queryParamMap.get(key);
      }
    }
    this.queryParams = queryParams;

    this.updateSort();
    this.updatePaginator();
  }

  private getPaginationLinks = (paginationLinks: PaginationLinks): void => {
    if (this.paginator && paginationLinks) {
      this.paginator.length = paginationLinks?.total;
    }
  };

  private redirect(queryParams: Params): void {
    this.router.navigate([], { relativeTo: this.route, queryParams });
  }

  private getSort = (sortEvent: Sort): void => {
    if (sortEvent) {
      const queryParams: Params = { ...this.queryParams };

      if (sortEvent.direction) {
        queryParams['sortField'] = sortEvent.active;
        queryParams['sortDirection'] = sortEvent.direction.toUpperCase();
      } else {
        delete queryParams['sortField'];
        delete queryParams['sortDirection'];
      }

      this.redirect(queryParams);
    }
  };

  private getPage = (pageEvent: PageEvent): void => {
    if (pageEvent) {
      const queryParams: Params = { ...this.queryParams };

      queryParams['pagination'] = pageEvent.pageSize;
      queryParams['page'] = pageEvent.pageIndex + 1;

      this.redirect(queryParams);
    }
  };

  private updateSort(): void {
    if (!this.sort) {
      return;
    }

    const queryParamMap: ParamMap = convertToParamMap(this.queryParams);

    if (
      queryParamMap.has('sortField') &&
      queryParamMap.get('sortField').trim()
    ) {
      const active = queryParamMap.get('sortField').trim();
      if (active) {
        this.sort.active = active;
      }
    }

    if (
      queryParamMap.has('sortDirection') &&
      queryParamMap.get('sortDirection').trim()
    ) {
      const direction = queryParamMap.get('sortDirection').trim().toLowerCase();
      if (direction === '' || direction === 'asc' || direction === 'desc') {
        this.sort.direction = direction as SortDirection;
      }
    }
  }

  private updatePaginator(): void {
    if (!this.paginator) {
      return;
    }

    const queryParamMap: ParamMap = convertToParamMap(this.queryParams);

    if (
      queryParamMap.has('pagination') &&
      queryParamMap.get('pagination').trim()
    ) {
      const pagination = queryParamMap.get('pagination').trim();
      if (pagination) {
        this.paginator.pageSize = parseInt(pagination, 10);
      } else {
        this.paginator.pageSize = 60;
      }
    } else {
      this.paginator.pageSize = 60;
    }

    if (queryParamMap.has('page') && queryParamMap.get('page').trim()) {
      const page = queryParamMap.get('page').trim();
      if (page) {
        this.paginator.pageIndex = parseInt(page, 10) - 1;
      } else {
        this.paginator.pageIndex = 0;
      }
    } else {
      this.paginator.pageIndex = 0;
    }
  }
}
