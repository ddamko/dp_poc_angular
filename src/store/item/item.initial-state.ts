import { makeTypedFactory } from 'typed-immutable-record';
import { IItem, IItemRecord } from './item.types';

export const ItemFactory = makeTypedFactory<IItem, IItemRecord>({
  item_key: null,
  id_no: null,
  short_name: null,
  descrip: null,
  prices: []
});

export const INITIAL_ITEM_STATE = ItemFactory();
