import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class ItemActions {
  static GET_ITEMS = 'GET_ITEMS';
  static NO_ITEMS = 'NO_ITEMS';
  static ITEMS_RETURNED = 'ITEMS_RETURNED';

  constructor(private _ngRedux: NgRedux<IAppState>) {}

  get_items(customer_id) {
    this._ngRedux.dispatch({
      type: ItemActions.GET_ITEMS,
      payload: customer_id
    });
  }
}
