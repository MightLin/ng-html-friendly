import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxHeaderDirective } from './checkbox-header.directive';
import { CheckboxHeaderContainerDirective } from './checkbox-header-container.directive';


@NgModule({
  imports: [CommonModule],
  exports: [CheckboxHeaderDirective, CheckboxHeaderContainerDirective],
  declarations: [CheckboxHeaderDirective, CheckboxHeaderContainerDirective]
})
export class CheckboxHeaderModule { }
