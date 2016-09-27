import { TypedRecord } from 'typed-immutable-record';

export interface IItem {
  items: Object;
}

export interface IItemRecord extends TypedRecord<IItemRecord>,
  IItem {
};
