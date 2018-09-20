# ngx-material-panel-select
Angular material panel select component

![example](https://raw.githubusercontent.com/petkit-io/assets/master/ngx-material-panel-select.gif)

# Installation

```bash
npm install --save @petkit/ngx-material-panel-select
```

# Usage

## Import Module

```ts
import {
  MatPanelSelectModule,
} from '@petkit/ngx-material-panel-select';

@NgModule({
  imports: [
    MatPanelSelectModule,
  ],
}
```

## Simple

```html
<button mat-raised-button color="primary" [matMenuTriggerFor]="panelSelect">panel select</button>

<mat-menu class="panel" #panelSelect>
  <ngx-mat-panel-select [data]="data"></ngx-mat-panel-select>
</mat-menu>
```

```scss
.panel[class] {
  max-width: none;
}
```

```ts
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  IMatPanelSelectData,
} from '@petkit/ngx-material-panel-select';
import Mock from 'mockjs';

@Component({
  selector: 'ngx-mat-panel-select-simple',
  templateUrl: './mat-panel-select-simple.component.html',
  styleUrls: ['./mat-panel-select-simple.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatPanelSelectSimpleComponent implements OnInit {
  data: IMatPanelSelectData[] = Mock.mock({
    'data|2-5': [{
      title: '@ctitle(2, 3)',
      'children|10-30': [{
        text: '@cword(2, 7)'
      }]
    }]
  }).data;

  constructor(
  ) { }

  ngOnInit() {
  }
}
```

# License
MIT

