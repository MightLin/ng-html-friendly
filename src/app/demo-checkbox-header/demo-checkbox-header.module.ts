import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoCheckboxHeaderComponent } from './demo-checkbox-header.component';
import { FormsModule } from '@angular/forms';
import { CheckboxHeaderModule, CheckedListModule } from 'projects/ng-html-friendly/src';
import { TestDynamicOptionComponent } from './test-dynamic-option/test-dynamic-option.component';
import { TestRandomOptionComponent } from './test-random-option/test-random-option.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxHeaderModule,
    CheckedListModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoCheckboxHeaderComponent,
      }
    ])
  ],
  declarations: [DemoCheckboxHeaderComponent, TestDynamicOptionComponent, TestRandomOptionComponent]
})
export class DemoCheckboxHeaderModule { }
