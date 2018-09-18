import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { MatPanelSelectComponent } from './mat-panel-select.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    MatPanelSelectComponent,
  ],
  exports: [
    MatPanelSelectComponent,
  ],
  entryComponents: [
  ]
})
export class MatPanelSelectModule { }
