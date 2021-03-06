import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { IAppState, ISession, rootReducer } from '../store';
import { SessionActions } from '../actions/session.actions';
import { SessionEpics } from '../epics/session.epics';
import { ItemEpics } from '../epics/item.epics';
import { RioAboutPage, RioCounterPage } from '../pages';
import { middleware, enhancers, reimmutify } from '../store';

import {
  RioButton,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
  RioLoginModal
} from '../components';

import {dev} from '../configuration';

@Component({
  selector: 'rio-sample-app',
  // Allow app to define global styles.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./sample-app.html')
})
export class RioSampleApp {
  @select(['session', 'hasError']) hasError$: Observable<boolean>;
  @select(['session', 'isLoading']) isLoading$: Observable<boolean>;
  @select(['session', 'user', 'firstName']) firstName$: Observable<string>;
  @select(['session', 'user', 'lastName']) lastName$: Observable<string>;
  @select(s => !!s.session.token) loggedIn$: Observable<boolean>;
  @select(s => !s.session.token) loggedOut$: Observable<boolean>;

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private actions: SessionActions,
    private session_epics: SessionEpics,
    private item_epics: ItemEpics) {

    const enh = (dev && devTools.isEnabled()) ?
      [ ... enhancers, devTools.enhancer({
        deserializeState: reimmutify,
      }) ] :
      enhancers;

    middleware.push(createEpicMiddleware(this.session_epics.login));
    middleware.push(createEpicMiddleware(this.item_epics.get_items));

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
    ngReduxRouter.initialize();
  }
};
