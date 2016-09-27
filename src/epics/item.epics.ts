import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPayloadAction, ItemActions } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

const BASE_URL = '/api';

@Injectable()
export class ItemEpics {
  constructor(private _http: Http) {}

  get_items = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({ type }) => type === ItemActions.GET_ITEMS)
      .mergeMap<IPayloadAction>(({ payload }) => {
        return this._http.post(`${BASE_URL}/customer/item`, payload)
          .map(result => ({
            type: ItemActions.ITEMS_RETURNED,
            payload: result.json().data
          }))
          .catch(error => {
            return Observable.of({
              type: ItemActions.NO_ITEMS
            });
          });
        });
  }
}
