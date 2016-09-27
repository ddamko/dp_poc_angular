import { TypedRecord } from 'typed-immutable-record';

export interface IItem {
  item_key: string;
  id_no: string;
  short_name: string;
  descrip: string;
  prices: Array<Object>;
}

export interface IItemRecord extends TypedRecord<IItemRecord>,
  IItem {
};
