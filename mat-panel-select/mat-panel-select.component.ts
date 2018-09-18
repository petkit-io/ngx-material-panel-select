import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  IMatPanelSelectData,
  IMatPanelSelectType,
} from './mat-panel-select.interface';

@Component({
  selector: 'ngx-mat-panel-select',
  templateUrl: './mat-panel-select.component.html',
  styleUrls: ['./mat-panel-select.component.scss']
})
export class MatPanelSelectComponent implements OnInit {
  @Input()
  data: IMatPanelSelectData[] = [];
  @Input()
  type: IMatPanelSelectType = 'list';

  @Output()
  itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
