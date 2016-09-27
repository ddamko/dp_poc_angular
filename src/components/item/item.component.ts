import { 
  Component, 
  Input,
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../../store';
import { ItemActions } from '../../actions/item.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';

@Component({
  selector: 'wws-item',
  template: `
    <div 
      data-testid="item-result"
      class="flex-auto flex-center center h1">

      <rio-button
        className="bg-black col-2"
        (onSubmit)="handleSubmit()">
        testid="counter-decrementButton">
        Get Items
      </rio-button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WWSItem {
  @Input() item: IItem;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  handleSubmit() {
    this.ngRedux.dispatch({ type: ItemActions.GET_ITEMS });
  }
};
