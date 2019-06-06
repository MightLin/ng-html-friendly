import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoCheckboxLeaderComponent } from './demo-checkbox-leader.component';
import { CheckboxLeaderModule, CheckedListModule } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { TestEmptyComponent } from './test-empty/test-empty.component';
import { TestDisabledComponent } from './test-disabled/test-disabled.component';
import { TestDynamicComponent } from './test-dynamic/test-dynamic.component';
import { TestWithCheckedListComponent } from './test-with-checked-list/test-with-checked-list.component';

@NgModule({
  imports: [
    CommonModule,
    CheckboxLeaderModule,
    CheckedListModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoCheckboxLeaderComponent,
      }
    ])
  ],
  declarations: [DemoCheckboxLeaderComponent, TestObservableComponent, TestEmptyComponent, TestDisabledComponent, TestDynamicComponent, TestWithCheckedListComponent]
})
export class DemoCheckboxLeaderModule { }
