import { Action } from 'redux';
import { CounterActions } from './counter.actions';
import { SessionActions } from './session.actions';
import { ItemActions } from './item.actions';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [
  CounterActions,
  SessionActions,
  ItemActions
];
export {
  CounterActions,
  SessionActions,
  ItemActions 
};
