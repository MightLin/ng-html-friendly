import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxLeaderItemDirective } from './checkbox-leader-item.directive';
import { CheckboxLeaderDirective } from './checkbox-leader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckboxLeaderDirective, CheckboxLeaderItemDirective],
  exports: [CheckboxLeaderDirective, CheckboxLeaderItemDirective],
})
export class CheckboxLeaderModule { }
