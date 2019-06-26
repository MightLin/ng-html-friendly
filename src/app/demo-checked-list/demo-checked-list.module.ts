import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoCheckedListComponent } from './demo-checked-list.component';
import { CheckedListModule } from 'projects/ng-html-friendly/src';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TestObjArrayComponent } from './test-obj-array/test-obj-array.component';
import { TestVarArrayComponent } from './test-var-array/test-var-array.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { TestTsSetComponent } from './test-ts-set/test-ts-set.component';

@NgModule({
  imports: [
    CommonModule,
    CheckedListModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoCheckedListComponent,
      }
    ])
  ],
  declarations: [DemoCheckedListComponent, TestObjArrayComponent, TestVarArrayComponent, TestObservableComponent, TestTsSetComponent]
})
export class DemoCheckedListModule { }
