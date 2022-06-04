import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TextSearcherForm } from './text-searcher-form.class';

@Component({
  selector: 'odo-text-searcher',
  templateUrl: './text-searcher.component.html',
  styleUrls: ['./text-searcher.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextSearcherComponent
  extends TextSearcherForm
  implements OnInit, OnDestroy
{
  @Output() queryParamsChange: EventEmitter<Params> =
    new EventEmitter<Params>();

  private subs: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public onKeydownEnter(event): void {
    if (this.canSearch) {
      this.onSearch();
    } else if (this.searchText === '') {
      this.onClear();
    }
  }

  public onClear(): void {
    this.resetSearch();
    const queryParamsEmit: Params = { ...this.route.snapshot.queryParams };
    delete queryParamsEmit['search'];
    this.queryParamsChange.emit(queryParamsEmit);
  }

  private onSearch(): void {
    const queryParamsEmit: Params = { ...this.route.snapshot.queryParams };
    queryParamsEmit['search'] = this.searchText;
    this.queryParamsChange.emit(queryParamsEmit);
  }
}
