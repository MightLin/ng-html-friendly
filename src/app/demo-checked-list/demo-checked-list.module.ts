import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoCheckedListComponent } from './demo-checked-list.component';
import { CheckedListModule } from 'projects/ng-html-friendly/src';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  declarations: [DemoCheckedListComponent]
})
export class DemoCheckedListModule { }
