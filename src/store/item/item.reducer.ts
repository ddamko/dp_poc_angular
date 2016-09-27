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
      items: INITIAL_ITEM_STATE
    });

  case ItemActions.ITEMS_RETURNED:
    return state.merge({
      items: action.payload.items,
    });

  case ItemActions.NO_ITEMS:
    return state.merge({
      items: INITIAL_ITEM_STATE
    });

  default:
    return state;
  }
}
