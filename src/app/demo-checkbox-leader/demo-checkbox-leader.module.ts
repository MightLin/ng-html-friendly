import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoCheckboxLeaderComponent } from './demo-checkbox-leader.component';
import { CheckboxLeaderModule, CheckedListModule } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';
import { TestObservableComponent } from './test-observable/test-observable.component';

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
  declarations: [DemoCheckboxLeaderComponent, TestObservableComponent]
})
export class DemoCheckboxLeaderModule { }
