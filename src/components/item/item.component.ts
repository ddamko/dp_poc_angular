import { 
  Component, 
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../../store';

@Component({
  selector: 'wws-item',
  template: `
    <div data-testid="item-result" class="flex-auto">
      <!--<rio-button
        className="btn btn-primary bg-blue col-4"
        (onClick)="get_items.emit()"
        testid="item-getItemsButton">
        Get Items
      </rio-button>-->
      <div id="items">
        <div class="col col-3" *ngFor="let i of item.items">
          <div class="item">
            <h2>{{ i.short_name }}</h2>
            <p><strong>Description:</strong> {{ i.descrip }}</p>
            <p><strong>Price:</strong> {{ i.prices[0].sell | currency:'USD':true}}</p>
          </div>
        </div>
      </div>
    </div>
    <style>
      .item { border:1px solid #A4A4A4; border-radius: 6px; margin:1em; background-color: white; box-shadow: 0 0 6px rgba(0,0,0,0.2); }
      .item h2 { border-radius: 6px 6px 0 0; background-color: #0174DF; color: white; padding: 3px 6px; margin-top: 0; }
      .item p { padding:0 1em; }
    </style>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WWSItem {
  @Input() item: IItem;
  @Output() get_items = new EventEmitter<void>();
};
