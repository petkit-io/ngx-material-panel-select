import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatMenu,
} from '@angular/material';
import {
  IMatPanelSelectData,
  IMatPanelSelectType,
} from './mat-panel-select.interface';

@Component({
  selector: 'ngx-mat-panel-select',
  templateUrl: './mat-panel-select.component.html',
  styleUrls: ['./mat-panel-select.component.scss'],
  // set encapsulation to None
  encapsulation: ViewEncapsulation.None,
})
export class MatPanelSelectComponent {
  @Input()
  data: IMatPanelSelectData[] = [];
  @Input()
  type: IMatPanelSelectType = 'list';
  @Input()
  dropdown = true;
  @Input('class')
  containerClass = '';

  @Output()
  itemClick: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatMenu)
  private _menu: MatMenu;

  constructor() { }

  get menu() {
    return this._menu;
  }
}
