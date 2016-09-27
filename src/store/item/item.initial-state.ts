import { makeTypedFactory } from 'typed-immutable-record';
import { IItem, IItemRecord } from './item.types';

export const ItemFactory = makeTypedFactory<IItem, IItemRecord>({
  items: null
});

export const INITIAL_ITEM_STATE = ItemFactory();
