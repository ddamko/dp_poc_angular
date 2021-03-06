import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  DevToolsExtension,
  NgRedux
} from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import {
  routing,
  appRoutingProviders
} from './sample-app.routing';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { RioSampleApp } from './sample-app';
import { SessionActions } from '../actions/session.actions';
import { SessionEpics } from '../epics/session.epics';
import { ItemActions } from '../actions/item.actions';
import { ItemEpics } from '../epics/item.epics';
import {
  RioAboutPage,
  RioCounterPage,
  ItemsPage
} from '../pages';
import { RioCounter } from '../components/counter/counter.component';
import { WWSItem } from '../components/item/item.component';
import { RioLoginModule } from '../components/login/login.module';
import { RioUiModule } from '../components/ui/ui.module';
import { RioNavigatorModule } from '../components/navigator/navigator.module';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule,
    RioLoginModule,
    RioUiModule,
    RioNavigatorModule
  ],
  declarations: [
    RioSampleApp,
    RioAboutPage,
    RioCounterPage,
    ItemsPage,
    WWSItem,
    RioCounter
  ],
  bootstrap: [
    RioSampleApp
  ],
  providers: [
    DevToolsExtension,
    FormBuilder,
    NgRedux,
    NgReduxRouter,
    appRoutingProviders,
    SessionActions,
    SessionEpics,
    ItemActions,
    ItemEpics,
    { provide: 'apiBase', useValue: '/api' }
  ]
})
export class RioSampleAppModule { }
