import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  convertToParamMap,
  ParamMap,
  Params,
  Router,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ParamsService {
  private params: Params;

  getParams(): Params {
    return this.params;
  }

  setParams(params: Params): Params {
    return (this.params = params);
  }

  constructor() {}
}
