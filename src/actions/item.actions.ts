import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class ItemActions {
  static GET_ITEMS = 'GET_ITEMS';
  static ADD_ITEM = 'ADD_ITEM';
  static REMOVE_ITEM = 'REMOVE_ITEM';
  static NO_ITEMS = 'NO_ITEMS';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  add_item() {
    this.ngRedux.dispatch({ type: ItemActions.ADD_ITEM });
  }

  remove_item() {
    this.ngRedux.dispatch({ type: ItemActions.REMOVE_ITEM });
  }

  get_items(customer_id) {
    this.ngRedux.dispatch({
      type: ItemActions.GET_ITEMS,
      payload: customer_id
    });
  }
}
