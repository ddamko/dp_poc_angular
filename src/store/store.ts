import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import * as counter from './counter';
import * as session from './session';
import * as item from './item';


export interface IAppState {
  counter?: counter.ICounter;
  session?: session.ISession;
  item?: item.IItem;
};

export const rootReducer = combineReducers<IAppState>({
  counter: counter.counterReducer,
  session: session.sessionReducer,
  item: item.itemReducer,
  router: routerReducer,
});

export function deimmutify(store) {
  return {
    counter: store.counter.toJS(),
    session: store.session.toJS(),
    item: store.item.toJS(),
    router: store.router,
  };
}

export function reimmutify(plain) {
  return {
    counter: counter.CounterFactory(plain.counter),
    session: session.SessionFactory(plain.session),
    item: item.ItemFactory(plain.item),
    router: plain.router,
  };
}
