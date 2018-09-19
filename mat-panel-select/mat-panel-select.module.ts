import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatMenuModule } from '@angular/material';

import { MatPanelSelectComponent } from './mat-panel-select.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
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
