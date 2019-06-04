import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoBinCheckboxComponent } from './demo-bin-checkbox.component';
import { BinCheckboxModule } from 'projects/ng-html-friendly/src';

@NgModule({
  imports: [
    CommonModule,
    BinCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoBinCheckboxComponent,
      }
    ])
  ],
  declarations: [DemoBinCheckboxComponent]
})
export class DemoBinCheckboxModule { }
