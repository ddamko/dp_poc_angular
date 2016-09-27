import {Routes} from '@angular/router';

import {
  RioCounterPage,
  RioAboutPage,
  ItemsPage
} from '../pages';

export const SAMPLE_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'counter'
}, {
  path: 'counter',
  component: RioCounterPage
}, {
  path: 'about',
  component: RioAboutPage
}, {
  path: 'items',
  component: ItemsPage
}];
