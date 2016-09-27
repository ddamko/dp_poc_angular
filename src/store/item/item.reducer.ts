import { IPayloadAction } from './../../actions';
import { ItemActions } from './../../actions/item.actions';
import { IItemRecord } from './item.types';
import { INITIAL_ITEM_STATE, ItemFactory } from './item.initial-state';

export function itemReducer(
  state: IItemRecord = INITIAL_ITEM_STATE,
  action: IPayloadAction): IItemRecord {
  
  switch (action.type) {
  case ItemActions.GET_ITEMS:
    return state.merge({
      INITIAL_ITEM_STATE
    });

  case ItemActions.ITEMS_RETURNED:
    return state.merge({
      item_key: action.payload.item_key,
      id_on: action.payload.id_do,
      short_name: action.payload.short_name,
      descrip: action.payload.descrip,
      prices: action.payload.prices
    });

  case ItemActions.NO_ITEMS:
    return state.merge({
      INITIAL_ITEM_STATE
    });

  default:
    return state;
  }
}
