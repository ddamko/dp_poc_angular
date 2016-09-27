import { Component, Inject, ApplicationRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { ItemActions } from '../actions';
import { RioContainer } from '../components';
import { IItem } from '../store';

@Component({
  selector: 'counter-page',
  providers: [ ItemActions ],
  template: `
    <rio-container testid="items" [size]=0 [center]=true>
      <h2 data-testid="items-heading" id="qa-items-heading"
        class="center caps">
        Items
      </h2>
      <wws-item
      [item]="item$ | async"
      (get_items)="actions.get_items('7D4B19AF-ADE8-8542-9CEE-FBD487B74F80')"
      ></wws-item>
    </rio-container>
  `
})
export class ItemsPage {
  @select() private item$: Observable<IItem>;
  constructor(private actions: ItemActions) {}
}
